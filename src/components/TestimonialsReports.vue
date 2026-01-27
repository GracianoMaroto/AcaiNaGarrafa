<template>
  <section class="section testimonials-premium" id="feedbacks">
    <h2 class="section-title text-center">Quem prova, aprova 💜</h2>

    <q-carousel
      v-model="slide"
      animated
      swipeable
      infinite
      arrows
      navigation
      navigation-position="bottom"
      :autoplay="4500"
      height="300px"
      class="testimonials-carousel"
    >
      <q-carousel-slide v-for="(t, i) in testimonials" :key="i" :name="i">
        <div class="testimonial-card glass-card">
          <div class="stars">
            <q-icon v-for="n in 5" :key="n" name="mdi-star" color="yellow-8" />
          </div>

          <p class="quote">“{{ t.text }}”</p>

          <div class="author">
            <div class="avatar">{{ t.initials }}</div>
            <span>{{ t.name }}</span>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const slide = ref(0)
const testimonials = [
  {
    name: 'Cliente iFood',
    initials: 'IF',
    text: 'Muito cremoso, chegou geladinho e bem servido!',
  },
  {
    name: 'Cliente WhatsApp',
    initials: 'WA',
    text: 'Sabor incrível, dá pra sentir que é artesanal mesmo 😍',
  },
  {
    name: 'Cliente da Rua',
    initials: 'CR',
    text: 'Comprei na hora e virei cliente fiel, bom demais!',
  },
]
</script>

<style scoped>
.testimonial-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(6px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12);
}

.testimonials-carousel .q-carousel__slide {
  display: flex;
  align-items: center;
}

.testimonials-premium {
  background:
    radial-gradient(circle at bottom left, #8e5fbf22, transparent 60%),
    linear-gradient(180deg, #f4eedc, #ffffff);
}

.testimonials-carousel {
  max-width: 900px;
  margin: 40px auto 0;
}

.testimonial-card {
  max-width: 500px;
  margin: 0 auto;
  padding: 28px 26px;
  border-radius: 26px;
  text-align: center;
}

/* STARS */
.stars {
  margin-bottom: 10px;
}

/* TEXT */
.quote {
  font-size: 1.05rem;
  font-style: italic;
  color: #333;
  margin: 14px 0 18px;
}

/* AUTHOR */
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
