<template>
  <section class="final-cta-premium" id="contato">
    <div class="cta-box">
      <h2>Pronto(a) para se apaixonar pelo nosso açaí? 💜</h2>

      <p>
        Peça agora seu açaí artesanal na garrafa e receba geladinho, do jeitinho que você merece.
      </p>

      <div class="cta-actions">
        <q-btn
          unelevated
          size="lg"
          icon="call"
          class="cta-whatsapp"
          label="Pedir no WhatsApp"
          :href="whatsapp"
          target="_blank"
        />

        <q-btn
          outline
          size="lg"
          icon="ti-instagram"
          class="cta-instagram"
          label="Ver no Instagram"
          href="https://instagram.com/acainagarrafavdc"
          target="_blank"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const whatsapp =
  'https://wa.me/5577988890597?text=Quero%20pedir%20meu%20açaí%20na%20garrafa%20agora%20😋'
</script>

<style scoped>
.final-cta-premium {
  background:
    radial-gradient(circle at top left, #8e5fbf55, transparent 60%),
    radial-gradient(circle at bottom right, #5a2d8255, transparent 60%),
    linear-gradient(135deg, #3e1f5c, #5a2d82);
  padding: 100px 20px;
  text-align: center;
}

.cta-box {
  max-width: 720px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(14px);
  border-radius: 32px;
  padding: 60px 40px;
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.35);
  color: white;
}

.cta-box h2 {
  font-family: var(--font-title);
  font-size: clamp(2rem, 4vw, 2.8rem);
  margin-bottom: 16px;
}

.cta-box p {
  font-size: 1.05rem;
  opacity: 0.95;
  max-width: 520px;
  margin: 0 auto 36px;
}

/* ACTIONS */
.cta-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.cta-whatsapp {
  background: linear-gradient(135deg, #25d366, #1ebe5d);
  border-radius: 18px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.cta-instagram {
  border-color: white;
  color: white;
  border-radius: 16px;
}

/* MOBILE */
@media (max-width: 600px) {
  .cta-box {
    padding: 40px 24px;
  }
}
</style>
