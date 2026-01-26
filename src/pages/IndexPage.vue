<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-page>
        <HeroSection />

        <ProductGallery />

        <FlavorsSection />

        <WhyUsSection />

        <HowItWorks />

        <Testimonials />

        <FinalCTA />

        <AppFooter />

        <FloatingWhatsapp />

        <StickyMobileCTA />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import HeroSection from 'components/HeroSection.vue'
import ProductGallery from 'components/ProductGallery.vue'
import FlavorsSection from 'components/FlavorsSection.vue'
import WhyUsSection from 'components/WhyUsSection.vue'
import HowItWorks from 'components/HowItWorks.vue'
import Testimonials from 'components/TestimonialsReports.vue'
import FinalCTA from 'components/FinalCTA.vue'
import AppFooter from 'components/AppFooter.vue'
import FloatingWhatsapp from 'components/FloatingWhatsapp.vue'
import StickyMobileCTA from 'components/StickyMobileCTA.vue'
</script>
