<template>
  <section class="hero-premium">
    <div class="container q-px-md q-pt-xs">
      <div class="row items-center q-col-gutter-lg">
        <!-- TEXTO / CARD -->
        <div class="col-12 col-md-6 flex flex-center text-center">
          <div class="hero-card">
            <q-img
              src="/src/assets/LogomarcaAçai.png"
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
              <span>🍓 Artesanal</span>
              <span>⚡ Pronto pra levar</span>
            </div>

            <q-btn
              unelevated
              size="lg"
              class="cta-btn q-mt-lg"
              label="Pedir agora no WhatsApp"
              :href="whatsappLink"
            />
          </div>
        </div>

        <!-- IMAGEM -->
        <div class="col-12 col-md-6 flex flex-center hero-image-wrapper">
          <div class="glow"></div>

          <q-img
            src="src/assets/acaicomcanudo.jpg"
            class="hero-image"
            alt="Açaí cremoso artesanal na garrafa pronto para beber"
            ratio="1"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const whatsappLink =
  'https://wa.me/5577988890597?text=Oi!%20Quero%20quero%20um%20açaí%20na%20garrafa%20😋'
</script>

<style scoped>
/* CARD */
.hero-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border-radius: 28px;
  padding: 40px 36px;
  box-shadow:
    0 25px 60px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  gap: 16px;
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

/* IMAGE */
.hero-image-wrapper {
  position: relative;
}

.glow {
  position: absolute;
  width: 280px;
  height: 280px;
  background: radial-gradient(circle, #8e5fbf99, transparent 70%);
  filter: blur(30px);
  z-index: 0;
}

.hero-image {
  max-width: 420px;
  border-radius: 26px;
  z-index: 1;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.18);
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

  .glow {
    width: 200px;
    height: 200px;
  }
}
</style>
