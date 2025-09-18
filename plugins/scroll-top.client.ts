export default defineNuxtPlugin(() => {
    const router = useRouter()

    // Scroll to top bei jeder Route-Änderung
    router.afterEach((to, from) => {
        // Nur scrollen wenn es wirklich eine neue Route ist
        if (to.path !== from.path) {
            // Warten bis die Page Transition beginnt
            nextTick(() => {
                setTimeout(() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })
                }, 100) // Kleine Verzögerung für Page Transition
            })
        }
    })
})