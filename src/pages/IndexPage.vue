<template>
  <q-layout view="hHh lpR fFf">
    <MainNavBar />
    <q-page-container>
      <q-page id="home" :class="isMobile ? 'background' : 'background q-pt-lg'">
        <HeroSection />

        <section id="fotos">
          <ProductGallery />
        </section>

        <section id="sabores">
          <FlavorsSection />
        </section>

        <section id="nosso_acai">
          <WhyUsSection />
        </section>

        <section id="preparo">
          <HowItWorks />
        </section>

        <section id="feedbacks">
          <Testimonials />
        </section>

        <section id="contato">
          <FinalCTA />
          <AppFooter />
        </section>

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
import MainNavBar from 'src/components/MainNavBar.vue'
import { computed } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const isMobile = computed(() => $q.screen.lt.md)

// import { useMeta } from 'quasar'

// ------------ FERRAMENTAS DE SEO - OTIMIZAR DEPOIS ------------

// useMeta({
// script: {
//     ldjson: {
//       type: 'application/ld+json',
//       innerHTML: JSON.stringify({
//         '@context': 'https://schema.org',
//         '@type': 'FoodEstablishment',
//         name: 'Açaí na Garrafa',
//         image: 'https://SEUSITE.com/seo/preview.jpg',
//         address: {
//           '@type': 'PostalAddress',
//           addressLocality: 'Vitória da Conquista',
//           addressRegion: 'BA',
//           addressCountry: 'BR',
//         },
//         telephone: '+5577988890597',
//         servesCuisine: 'Açaí',
//         priceRange: '$$',
//         sameAs: ['https://instagram.com/acainagarrafavdc'],
//       }),
//     },
//   },
//   title: 'Açaí na Garrafa em Vitória da Conquista | Artesanal e Cremoso',
//   titleTemplate: (title) => `${title} — Peça no WhatsApp`,
//   meta: {
//     description: {
//       name: 'description',
//       content:
//         'Açaí artesanal na garrafa em Vitória da Conquista. Cremoso, feito na hora, com frutas frescas. Peça pelo WhatsApp ou iFood.',
//     },

//     keywords: {
//       name: 'keywords',
//       content:
//         'açaí em vitória da conquista, açaí na garrafa, açaí artesanal, açaí delivery, açaí cremoso, açaí no ifood',
//     },

//     robots: { name: 'robots', content: 'index, follow' },

//     // Open Graph (WhatsApp / Facebook)
//     ogTitle: {
//       property: 'og:title',
//       content: 'Açaí na Garrafa em Vitória da Conquista 🥤💜',
//     },
//     ogDescription: {
//       property: 'og:description',
//       content:
//         'Cremoso, artesanal e feito na hora. Peça seu açaí na garrafa pelo WhatsApp!',
//     },
//     ogImage: {
//       property: 'og:image',
//       content: 'https://SEUSITE.com/seo/preview.jpg',
//     },
//     ogType: { property: 'og:type', content: 'website' },

//     // Twitter
//     twitterCard: {
//       name: 'twitter:card',
//       content: 'summary_large_image',
//     },
//   },
// })
</script>

<style scoped>
.background {
  background:
    radial-gradient(circle at top left, #8e5fbf33, transparent 55%),
    radial-gradient(circle at bottom right, #5a2d8233, transparent 55%),
    linear-gradient(135deg, #f4eedc, #ffffff);
}
</style>
