<template>
  <section class="section gallery-premium" id="fotos">
    <h2 class="section-title text-center">Cremosidade que dá gosto!</h2>

    <q-card class="card-premium">
        <div class="img-frame">
          <q-img :src="img1"  />
        </div>
    </q-card>
  </section>
</template>

<script setup>
import img1 from 'src/assets/SaboresAcai.jpeg'
</script>

<style scoped>
.card-premium {
  border-radius: 22px;
}

.img-frame {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: hidden;
  border-radius: 22px;
}
</style>
