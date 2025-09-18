export default defineNuxtPlugin(() => {
  if (!process.client) return

  // Skip links for keyboard navigation
  const createSkipLinks = () => {
    const skipLinks = document.createElement('div')
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Zum Hauptinhalt springen</a>
      <a href="#navigation" class="skip-link">Zur Navigation springen</a>
      <a href="#footer" class="skip-link">Zum Footer springen</a>
    `
    skipLinks.className = 'skip-links'
    document.body.insertBefore(skipLinks, document.body.firstChild)

    // Add styles for skip links
    const style = document.createElement('style')
    style.textContent = `
      .skip-links {
        position: absolute;
        top: -100px;
        left: 0;
        z-index: 10000;
      }
      
      .skip-link {
        position: absolute;
        top: -100px;
        left: 0;
        background: #f59e0b;
        color: #000;
        padding: 0.5rem 1rem;
        text-decoration: none;
        font-weight: bold;
        border-radius: 0 0 4px 0;
        transition: top 0.3s ease;
      }
      
      .skip-link:focus {
        top: 0;
      }
      
      .skip-link:hover {
        background: #d97706;
      }
    `
    document.head.appendChild(style)
  }

  // Enhanced focus management
  const setupFocusManagement = () => {
    let focusedElementBeforeModal = null

    // Trap focus within modals
    const trapFocus = (element) => {
      const focusableElements = element.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])'
      )

      if (focusableElements.length === 0) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      element.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault()
              lastElement.focus()
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault()
              firstElement.focus()
            }
          }
        }

        if (e.key === 'Escape') {
          closeModal(element)
        }
      })

      firstElement.focus()
    }

    // Close modal and restore focus
    const closeModal = (modal) => {
      modal.style.display = 'none'
      modal.setAttribute('aria-hidden', 'true')

      if (focusedElementBeforeModal) {
        focusedElementBeforeModal.focus()
        focusedElementBeforeModal = null
      }
    }

    // Setup modal accessibility
    document.addEventListener('click', (e) => {
      const modalTrigger = e.target.closest('[data-modal-trigger]')
      if (modalTrigger) {
        const modalId = modalTrigger.getAttribute('data-modal-trigger')
        const modal = document.getElementById(modalId)

        if (modal) {
          focusedElementBeforeModal = document.activeElement
          modal.style.display = 'block'
          modal.setAttribute('aria-hidden', 'false')
          trapFocus(modal)
        }
      }

      const modalClose = e.target.closest('[data-modal-close]')
      if (modalClose) {
        const modal = modalClose.closest('[role="dialog"]')
        if (modal) {
          closeModal(modal)
        }
      }
    })
  }

  // Keyboard navigation enhancement
  const setupKeyboardNavigation = () => {
    // Arrow key navigation for menu items
    document.addEventListener('keydown', (e) => {
      const currentElement = document.activeElement
      const nav = currentElement.closest('nav[role="navigation"]')

      if (!nav) return

      const menuItems = nav.querySelectorAll('a, button')
      const currentIndex = Array.from(menuItems).indexOf(currentElement)

      switch (e.key) {
        case 'ArrowDown':
        case 'ArrowRight':
          e.preventDefault()
          const nextIndex = (currentIndex + 1) % menuItems.length
          menuItems[nextIndex].focus()
          break

        case 'ArrowUp':
        case 'ArrowLeft':
          e.preventDefault()
          const prevIndex = currentIndex === 0 ? menuItems.length - 1 : currentIndex - 1
          menuItems[prevIndex].focus()
          break

        case 'Home':
          e.preventDefault()
          menuItems[0].focus()
          break

        case 'End':
          e.preventDefault()
          menuItems[menuItems.length - 1].focus()
          break
      }
    })
  }

  // Screen reader announcements
  const setupScreenReaderSupport = () => {
    // Create live region for announcements
    const liveRegion = document.createElement('div')
    liveRegion.setAttribute('aria-live', 'polite')
    liveRegion.setAttribute('aria-atomic', 'true')
    liveRegion.className = 'sr-only'
    liveRegion.id = 'live-announcements'
    document.body.appendChild(liveRegion)

    // Global announcement function
    window.announceToScreenReader = (message, priority = 'polite') => {
      const announcement = document.createElement('div')
      announcement.textContent = message
      announcement.setAttribute('aria-live', priority)

      liveRegion.appendChild(announcement)

      // Remove after announcement
      setTimeout(() => {
        if (announcement.parentNode) {
          announcement.parentNode.removeChild(announcement)
        }
      }, 3000)
    }

    // Announce route changes
    const router = useRouter()
    router.afterEach((to) => {
      setTimeout(() => {
        const pageTitle = document.title
        window.announceToScreenReader(`Navigiert zu ${pageTitle}`)
      }, 100)
    })
  }

  // Form accessibility enhancements
  const setupFormAccessibility = () => {
    // Associate labels with form controls
    document.addEventListener('DOMContentLoaded', () => {
      const forms = document.querySelectorAll('form')

      forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select')

        inputs.forEach(input => {
          // Add required attribute announcements
          if (input.hasAttribute('required')) {
            input.setAttribute('aria-required', 'true')

            const label = form.querySelector(`label[for="${input.id}"]`)
            if (label && !label.textContent.includes('*')) {
              label.innerHTML += ' <span aria-label="erforderlich">*</span>'
            }
          }

          // Setup error announcements
          input.addEventListener('invalid', (e) => {
            const message = e.target.validationMessage
            window.announceToScreenReader(`Fehler: ${message}`, 'assertive')
          })
        })
      })
    })
  }

  // High contrast mode detection
  const setupHighContrastSupport = () => {
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)')

      const handleContrastChange = (e) => {
        if (e.matches) {
          document.documentElement.classList.add('high-contrast')
        } else {
          document.documentElement.classList.remove('high-contrast')
        }
      }

      mediaQuery.addListener(handleContrastChange)
      handleContrastChange(mediaQuery)
    }
  }

  // Reduced motion support
  const setupReducedMotionSupport = () => {
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

      const handleMotionChange = (e) => {
        if (e.matches) {
          document.documentElement.classList.add('reduce-motion')
        } else {
          document.documentElement.classList.remove('reduce-motion')
        }
      }

      mediaQuery.addListener(handleMotionChange)
      handleMotionChange(mediaQuery)
    }
  }

  // Initialize all accessibility features
  const initAccessibility = () => {
    createSkipLinks()
    setupFocusManagement()
    setupKeyboardNavigation()
    setupScreenReaderSupport()
    setupFormAccessibility()
    setupHighContrastSupport()
    setupReducedMotionSupport()

    // Add accessibility CSS
    const accessibilityStyles = document.createElement('style')
    accessibilityStyles.textContent = `
      /* Screen reader only content */
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
      
      /* High contrast mode adjustments */
      .high-contrast {
        --tw-bg-opacity: 1;
        --tw-text-opacity: 1;
      }
      
      .high-contrast button,
      .high-contrast a {
        border: 2px solid currentColor;
      }
      
      /* Reduced motion */
      .reduce-motion *,
      .reduce-motion *::before,
      .reduce-motion *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
      
      /* Focus indicators */
      *:focus-visible {
        outline: 3px solid #f59e0b;
        outline-offset: 2px;
      }
      
      /* Enhanced link styling for accessibility */
      a:not(.btn):not(.nav-link) {
        text-decoration: underline;
        text-decoration-thickness: 1px;
        text-underline-offset: 2px;
      }
      
      a:not(.btn):not(.nav-link):hover {
        text-decoration-thickness: 2px;
      }
    `
    document.head.appendChild(accessibilityStyles)
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAccessibility)
  } else {
    initAccessibility()
  }

  return {
    provide: {
      accessibility: {
        announceToScreenReader: (message, priority = 'polite') => {
          if (window.announceToScreenReader) {
            window.announceToScreenReader(message, priority)
          }
        }
      }
    }
  }
})