<template>
  <section class="section" id="feedbacks">
    <h2 class="section-title text-center">Quem prova, aprova 💜</h2>

    <!-- MOBILE: carrossel -->
    <q-carousel
      v-if="isMobile"
      v-model="slide"
      navigation
      swipeable
      infinite
      arrows
      class="testimonials-carousel"
    >
      <q-carousel-slide v-for="(t, i) in testimonials" :key="i" :name="i">
        <div class="testimonial-card glass-card">
          <div class="stars">
            <q-icon v-for="n in 5" :key="n" name="star" color="yellow-8" />
          </div>

          <p class="quote">“{{ t.text }}”</p>

          <div class="author">
            <div class="avatar">{{ t.initials }}</div>
            <span>{{ t.name }}</span>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <!-- DESKTOP: grid de cards -->
    <div v-else class="testimonials-desktop-wrapper">
      <div class="testimonials-desktop-row">
        <div v-for="(t, i) in testimonials" :key="i" class="testimonial-card glass-card">
          <div class="stars">
            <q-icon v-for="n in 5" :key="n" name="star" color="yellow-8" />
          </div>

          <p class="quote">“{{ t.text }}”</p>

          <div class="author">
            <div class="avatar">{{ t.initials }}</div>
            <span>{{ t.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const isMobile = computed(() => $q.screen.lt.md)

const slide = ref(0)

const testimonials = [
  { name: 'Heder David', initials: 'HD', text: 'Muito bom e geladinho' },
  { name: 'Jaquionias Ferraz', initials: 'JF', text: 'Rapaz, parece um milkshake' },
  { name: 'Poliana Souza', initials: 'PS', text: 'Deveria ter um plano de assinatura' },

  {
    name: 'Júlia Macedo',
    initials: 'JM',
    text: 'O de morango é o meu favorito, peçam',
  },
  {
    name: 'Katarine Meira',
    initials: 'KM',
    text: 'Comprei para testar e virei cliente',
  },
  {
    name: 'Iasmin Cristina',
    initials: 'IC',
    text: 'Pensa num açaí gostoso!',
  },
]
</script>

<style scoped>
.testimonials-desktop-wrapper {
  background-color: rgba(97, 64, 128, 0.815);
  border-radius: 22px;
  padding: 28px 26px;
  max-width: 1100px;
  margin: 60px auto;
}

.testimonials-desktop-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.testimonial-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(6px);
  padding: 28px 26px;
  border-radius: 22px;
  text-align: center;
}

.testimonials-carousel {
  max-width: 500px;
  margin: 60px auto;
  padding: 28px 26px;
  border-radius: 22px;
  text-align: center;
  background-color: rgba(97, 64, 128, 0.815);
  max-height: 300px;
}

.testimonials-carousel .q-carousel__slide {
  display: flex;
  align-items: center;
  justify-content: center;
}

.stars {
  margin-bottom: 10px;
}

.quote {
  font-size: 1.05rem;
  font-style: italic;
  color: #333;
  margin: 14px 0 18px;
}

.author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: 600;
  color: var(--roxo-principal);
}

.avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--roxo-principal), var(--roxo-claro));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
}
</style>
