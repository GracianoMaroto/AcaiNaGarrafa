<template>
  <section class="section bg-light" v-intersect>
    <h2 class="section-title text-center">Cremosidade que dá gosto 🤤</h2>

    <q-carousel animated swipeable infinite arrows height="320px">
      <q-carousel-slide v-for="(img, i) in images" :key="i">
        <q-img
          src="/icons/acaicomacompanhamentos"
          alt="Açaí cremoso em garrafa"
          fit="cover"
          class="rounded"
        />
      </q-carousel-slide>
    </q-carousel>
  </section>
</template>

<script setup>
const images = ['/images/gallery1.jpg', '/images/gallery2.jpg', '/images/gallery3.jpg']
</script>

<style scoped>
.bg-light {
  background: var(--creme);
}

.rounded {
  border-radius: 16px;
}
</style>
