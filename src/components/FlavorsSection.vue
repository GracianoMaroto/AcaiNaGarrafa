<template>
  <section class="section" v-intersect>
    <h2 class="section-title text-center">Nossos Sabores</h2>

    <div class="row q-col-gutter-md container">
      <div v-for="flavor in flavors" :key="flavor.name" class="col-12 col-md-4">
        <q-card class="flavor-card glass-card" v-intersect>
          <q-img src="/icons/acaisnagarrafa.jpeg" alt="Açaí cremoso em garrafa" ratio="1" />

          <q-card-section>
            <h3>{{ flavor.name }}</h3>
            <p>{{ flavor.desc }}</p>
          </q-card-section>

          <q-card-actions align="center">
            <q-btn color="primary" :href="flavor.link" target="_blank" label="Quero agora" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </section>
</template>

<script setup>
import { whatsappMsg } from 'src/utils/whatsapp'

const flavors = [
  {
    name: 'Tradicional',
    desc: 'Açaí com leite condensado',
    image: '/images/tradicional.png',
    link: whatsappMsg('Quero o açaí tradicional 🍇'),
  },
  {
    name: 'Morango',
    desc: 'Açaí com morango e leite condensado',
    image: '/images/morango.png',
    link: whatsappMsg('Quero o açaí de morango 🍓'),
  },
  {
    name: 'Maracujá',
    desc: 'Açaí com calda de maracujá',
    image: '/images/maracuja.png',
    link: whatsappMsg('Quero o açaí de maracujá 🥭'),
  },
]
</script>

<style scoped>
.section {
  padding: 80px 0;
}

.flavor-card h3 {
  color: var(--roxo-principal);
}
</style>
