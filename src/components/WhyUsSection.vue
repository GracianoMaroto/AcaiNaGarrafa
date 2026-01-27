<template>
  <section class="section">
    <h2 class="section-title text-center">Por que nosso açaí é diferente?</h2>

    <div class="row container q-col-gutter-lg text-center">
      <div class="col-12 col-md-4" v-for="item in items" :key="item.title">
        <div class="why-card glass-card">
          <q-icon :name="item.icon" size="40px" color="primary" />
          <h4>{{ item.title }}</h4>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  { icon: 'mdi-blender', title: 'Feito na Hora', desc: 'Sempre fresquinho e saboroso.' },
  { icon: 'mdi-fruit-cherries', title: 'Ingredientes Selecionados', desc: 'Nada de xarope.' },
  { icon: 'mdi-heart', title: 'Cremosidade Real', desc: 'Textura encorpada e natural.' },
]
</script>

<style scoped>
.why-card {
  padding: 28px 20px;
  border-radius: 22px;
}
</style>
