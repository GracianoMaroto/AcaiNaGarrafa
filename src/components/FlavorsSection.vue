<template>
  <section class="section" id="sabores">
    <h2 class="section-title text-center">Nossos Sabores</h2>

    <div
      :class="isMobile ? 'row q-col-gutter-lg container' : 'row q-col-gutter-lg container q-px-xl'"
    >
      <div v-for="flavor in flavors" :key="flavor.name" class="col-12 col-md-4">
        <q-card class="flavor-card-premium">
          <q-img
            :src="flavor.image"
            ratio="1"
            class="flavor-img"
            alt="Sabores de açaí na na garrafa em Vitória da Conquista"
            loading="lazy"
          />

          <q-card-section>
            <h3>{{ flavor.name }}</h3>
            <p>{{ flavor.desc }}</p>
          </q-card-section>

          <q-card-actions align="center">
            <q-btn
              unelevated
              class="cta-btn"
              :href="flavor.link"
              target="_blank"
              label="Quero agora"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { whatsappMsg } from 'src/utils/whatsapp'
import { computed } from 'vue'
import acaitradicional from 'src/assets/AcaiTradicional.jpeg'
import acaimorango from 'src/assets/AcaiMorango.jpeg'
import acaimaracuja from 'src/assets/acaimaracuja.jpeg'

const $q = useQuasar()

const isMobile = computed(() => $q.screen.lt.md)

const flavors = [
  {
    name: 'Tradicional',
    desc: 'Açaí da Bahia batido com leite e decorado com leite condensado. Acompanha 01 paçoca para uma experiência ainda mais saborosa.',
    image: acaitradicional,
    link: whatsappMsg('Quero o açaí tradicional 💜'),
  },
  {
    name: 'Morango',
    desc: 'Açaí da Bahia batido com leite, deliciosos morangos e decorado um mousse de morango irresistível.',
    image: acaimorango,
    link: whatsappMsg('Quero o açaí de morango 🍓'),
  },
  {
    name: 'Maracujá',
    desc: 'Açaí da Bahia batido com leite e decorado com um mousse de Maracujá de cair o queixo.',
    image: acaimaracuja,
    link: whatsappMsg('Quero o açaí de maracujá 😋'),
  },
]
</script>

<style scoped>
.flavor-card-premium {
  border-radius: 26px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.12);
}

.flavor-card-premium:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
}

.flavor-img {
  min-height: 700px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.flavor-card-premium h3 {
  color: var(--roxo-principal);
  margin-bottom: 6px;
}
</style>
