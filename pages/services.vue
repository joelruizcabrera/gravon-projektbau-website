<template>
  <div>
    <!-- Page Hero (bereits optimiert mit PageHero) -->
    <PageHero
        :title="$t('services.title')"
        :subtitle="$t('services.subtitle')"
        background-image="/images/frankfurt-skyline.jpg"
        height="medium"
        :show-breadcrumbs="true"
        :buttons="heroButtons"
    />

    <!-- Service Overview -->
    <SectionContainer
        :title="$t('services.overview.title')"
        :subtitle="$t('services.overview.subtitle')"
        background="white"
        padding="large"
    >
      <div class="grid md:grid-cols-3 gap-8">
        <UniversalCard
            v-for="service in serviceOverview"
            :key="service.title"
            :title="$t(service.title)"
            :description="$t(service.description)"
            :icon="service.icon"
            :features="service.points.map(point => $t(point))"
            hover-effect
            size="medium"
            :primary-action="{
            text: $t('services.learnMore'),
            variant: 'primary',
            size: 'sm',
            handler: () => openServiceModal(service)
          }"
        />
      </div>
    </SectionContainer>

    <!-- Detailed Services -->
    <SectionContainer
        background="gray"
        padding="large"
    >
      <div class="space-y-20">
        <div
            v-for="(service, index) in detailedServices"
            :key="service.title"
            class="grid lg:grid-cols-2 gap-16 items-center"
            :class="{ 'lg:grid-flow-col-dense': index % 2 === 1 }"
        >
          <!-- Content -->
          <div class="gsap-slide-left">
            <UniversalCard
                :title="$t(service.title)"
                :description="$t(service.description)"
                :icon="service.icon"
                :features="service.features.map(feature => $t(feature))"
                variant="minimal"
                size="large"
                :primary-action="{
                text: $t('services.requestQuote'),
                variant: 'primary',
                handler: () => $router.push('/contact')
              }"
                :secondary-action="{
                icon: 'external-link',
                handler: () => openServiceModal(service)
              }"
            />
          </div>

          <!-- Image -->
          <div
              class="gsap-slide-right"
              :class="{ 'lg:order-first': index % 2 === 1 }"
          >
            <NuxtImg
                :src="service.image"
                :alt="$t(service.title)"
                width="600"
                height="400"
                format="webp"
                class="w-full rounded-2xl shadow-2xl"
                loading="lazy"
            />
          </div>
        </div>
      </div>
    </SectionContainer>

    <!-- Service Modal -->
    <AppModal
        v-model="showServiceModal"
        :title="selectedService ? $t(selectedService.title) : ''"
        size="large"
        :confirm-text="$t('contact.getQuote')"
        :cancel-text="$t('common.close')"
        @confirm="handleServiceInquiry"
    >
      <div v-if="selectedService" class="space-y-6">
        <div class="prose max-w-none">
          <p class="text-lg text-gray-700">{{ $t(selectedService.description) }}</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-gray-900 mb-3">{{ $t('services.included') }}</h4>
            <ul class="space-y-2">
              <li
                  v-for="feature in selectedService.features"
                  :key="feature"
                  class="flex items-start text-sm text-gray-700"
              >
                <Icon name="check-circle" class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                {{ $t(feature) }}
              </li>
            </ul>
          </div>

          <div>
            <NuxtImg
                :src="selectedService.image"
                :alt="$t(selectedService.title)"
                width="300"
                height="200"
                format="webp"
                class="w-full rounded-lg"
                loading="lazy"
            />
          </div>
        </div>
      </div>
    </AppModal>
  </div>
</template>

<script setup>
import SectionContainer from "~/components/ui/SectionContainer.vue";
import UniversalCard from "~/components/ui/UniversalCard.vue";
import AppModal from "~/components/ui/AppModal.vue";
import Icon from "~/components/ui/Icon.vue";

const { t } = useI18n()
const router = useRouter()

// Reactive Data
const showServiceModal = ref(false)
const selectedService = ref(null)

// Service Data (vereinfacht durch Modularisierung)
const serviceOverview = [
  {
    title: 'services.generalContractor.title',
    description: 'services.generalContractor.description',
    icon: 'building',
    points: ['services.overview.point1', 'services.overview.point2', 'services.overview.point3']
  },
  // weitere Services...
]

const detailedServices = [
  {
    title: 'services.generalContractor.title',
    description: 'services.generalContractor.longDescription',
    image: '/images/general-contractor-detail.jpg',
    icon: 'building',
    features: ['services.generalContractor.feature1', 'services.generalContractor.feature2']
  },
  // weitere Services...
]

const heroButtons = [
  {
    text: t('services.requestQuote'),
    variant: 'primary',
    to: '/contact',
    icon: true
  }
]

// Methods
const openServiceModal = (service) => {
  selectedService.value = service
  showServiceModal.value = true
}

const handleServiceInquiry = () => {
  router.push('/contact')
  showServiceModal.value = false
}

// SEO
useHead({
  title: t('services.title') + ' - GRAVON Projektbau',
  meta: [{ name: 'description', content: t('services.meta.description') }]
})
</script>