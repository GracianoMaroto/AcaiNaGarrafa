<template>
  <section class="section gallery-premium" id="fotos">
    <h2 class="section-title text-center">Cremosidade que dá gosto!</h2>

    <q-carousel v-model="slide" animated swipeable infinite arrows class="carousel-premium">
      <q-carousel-slide v-for="(img, i) in images" :key="i" :name="i">
        <div class="img-frame">
          <q-img :src="img" class="gallery-img" />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </section>
</template>

<script setup>
import img1 from 'src/assets/duasgarrafas.png'
import img2 from 'src/assets/acaicomacompanhamentos.jpg'
import img3 from 'src/assets/acaisnagarrafa.jpeg'

import { ref } from 'vue'

const slide = ref(0)

const images = [img1, img2, img3]
</script>

<style scoped>
.carousel-premium {
  border-radius: 28px;
  overflow: hidden;
  max-width: 900px;
  height: auto;
  margin: 0 auto;
}

.img-frame {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: hidden;
}

.gallery-img {
  width: 100%;
  height: 100%; /* keep aspect ratio */
  object-fit: contain;
  border-radius: 22px;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.2);
}
</style>
