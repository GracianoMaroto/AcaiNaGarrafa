<template>
  <section class="hero-premium">
    <div class="container q-px-md q-pt-xs">
      <div class="q-col-gutter-lg">
        <!-- TEXTO / CARD -->
        <div class="card">
          <q-card class="row hero-card">
            <div class="col-12 col-md-6 hero-text" style="text-align: center">
              <q-img
                :src="logomarcaacai"
                class="logo"
                fit="contain"
                alt="Açaí artesanal na garrafa Vitória da Conquista"
              />

              <h1>Açaí cremoso de verdade, na garrafa.</h1>

              <p class="subtitle">
                Produção artesanal, feito na hora, com frutas frescas e ingredientes selecionados.
              </p>

              <div class="benefits q-gutter-md">
                <span>🥤 Cremoso</span>
                <span>🍓 Natural</span>
                <span>⚡ Artesanal</span>
              </div>

              <q-btn unelevated size="lg" class="cta-btn q-mt-lg" :href="whatsappLink">
                <q-icon name="bi-whatsapp" color="white" size="25px" class="q-mr-sm" />
                <span style="font-size: 20px; color: white"> WhatsApp </span>
              </q-btn>
            </div>

            <div v-if="!isMobile" class="col-12 col-md-6">
              <q-img
                :src="acaicomcanudo"
                alt="Açaí cremoso artesanal na garrafa pronto para beber"
                class="full-width"
                style="object-fit: cover; height: 100%"
              />
            </div>
          </q-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import logomarcaacai from 'src/assets/LogomarcaAçai.png'
import acaicomcanudo from 'src/assets/acaicomcanudo.jpg'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { computed } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const isMobile = computed(() => $q.screen.lt.md)

const whatsappLink =
  'https://wa.me/5577988890597?text=Oi!%20Quero%20quero%20um%20açaí%20na%20garrafa%20😋'
</script>

<style scoped>
/* CARD */
.hero-card {
  min-height: 420px;
  max-height: 700px;
  backdrop-filter: blur(12px);
  border-radius: 28px;
  box-shadow:
    0 25px 60px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
  overflow: hidden;
}

.hero-text {
  padding: 40px 36px;
  text-align: center;
}

.logo {
  width: clamp(180px, 20vw, 240px);
  align-self: center;
}

h1 {
  font-family: var(--font-title);
  color: var(--roxo-principal);
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  line-height: 1.1;
}

.subtitle {
  font-size: 1.05rem;
  color: #444;
}

.benefits {
  gap: 14px;
  flex-wrap: wrap;
  font-weight: 500;
}

/* CTA */
.cta-btn {
  background: linear-gradient(135deg, #25d366, #1ebe5d);
  border-radius: 16px;
  padding: 16px 32px;
  font-weight: 700;
  letter-spacing: 0.5px;
  box-shadow: 0 12px 30px rgba(37, 211, 102, 0.45);
  transition: all 0.25s ease;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 40px rgba(37, 211, 102, 0.6);
}

/* MOBILE */
@media (max-width: 600px) {
  .hero-premium {
    padding-top: 20px;
    padding-bottom: 60px;
  }

  .hero-card {
    margin: 0 auto;
  }

  .subtitle {
    max-width: 100%;
  }
}
</style>
