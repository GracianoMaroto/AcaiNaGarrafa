<template>
  <section class="section" id="nosso_acai">
    <h2 class="section-title text-center">Por que nosso açaí é diferente?</h2>

    <div
      :class="
        isMobile
          ? 'row container q-col-gutter-lg text-center'
          : 'row container q-col-gutter-lg q-px-xl text-center'
      "
    >
      <div class="col-12 col-md-4" v-for="item in items" :key="item.title">
        <div class="why-card glass-card">
          <q-icon :name="item.icon" size="40px" style="color: var(--roxo-principal)" />
          <h4>{{ item.title }}</h4>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { computed } from 'vue'

const $q = useQuasar()

const isMobile = computed(() => $q.screen.lt.md)

const items = [
  { icon: 'blender', title: 'Batido com Leite', desc: 'Nada de água, leite integral de marca.' },
  {
    icon: 'verified',
    title: 'Ingredientes Selecionados',
    desc: 'Açái da Bahia, frutas e leite condensado de marca.',
  },
  {
    icon: 'favorite',
    title: 'Cremosidade Real',
    desc: 'Nada daquele suco de açaí aguado.',
  },
]
</script>

<style scoped>
.why-card {
  padding: 28px 20px;
  border-radius: 22px;
}
</style>
