<template>
  <section class="section" v-intersect>
    <h2 class="section-title text-center">Quem prova, aprova 💜</h2>

    <q-carousel swipeable animated infinite height="220px">
      <q-carousel-slide v-for="(t, i) in testimonials" :key="i">
        <div class="text-center q-pa-md">
          <p class="quote">\"{{ t.text }}\"</p>
          <strong>— {{ t.name }}</strong>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </section>
</template>

<script setup>
const testimonials = [
  { name: 'Cliente iFood', text: 'Muito cremoso e bem servido!' },
  { name: 'Cliente WhatsApp', text: 'Chegou geladinho e delicioso 😍' },
  { name: 'Cliente da Rua', text: 'O melhor açaí que já tomei!' },
]
</script>

<style scoped>
.quote {
  font-size: 1.1rem;
}
</style>
