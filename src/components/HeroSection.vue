<template>
  <section class="hero" v-intersect>
    <div class="container row items-center">
      <div class="col-12 col-md-6 q-pa-md">
        <h1>Açaí cremoso de verdade, na garrafa</h1>

        <p class="badge">
          Artesanal, feito na hora, com frutas frescas e ingredientes de qualidade.
        </p>

        <ul class="benefits">
          <li>✔ Cremoso</li>
          <li>✔ Artesanal</li>
          <li>✔ Pronto pra levar</li>
        </ul>

        <q-btn
          unelevated
          size="lg"
          class="cta-btn"
          label="Pedir agora no WhatsApp"
          :href="whatsappLink"
        />
      </div>

      <div class="col-12 col-md-6 q-pa-md">
        <q-img
          src="/icons/acaicomcanudo.jpg"
          alt="Açaí cremoso em garrafa"
          loading="eager"
          fetchpriority="high"
          ratio="1"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const whatsappLink =
  'https://wa.me/5577988890597?text=Oi!%20Quero%20pedir%20um%20açaí%20na%20garrafa%20🍇'
</script>

<style scoped>
.hero {
  background:
    radial-gradient(circle at top right, #8e5fbf33, transparent 60%),
    linear-gradient(135deg, #f4eedc, #ffffff);
}

h1 {
  font-family: var(--font-title);
  color: var(--roxo-principal);
  font-size: clamp(2rem, 4vw, 3rem);
}

.subtitle {
  font-size: 1.1rem;
  margin-top: 12px;
}

.benefits {
  list-style: none;
  padding: 0;
  margin-top: 12px;
}

.benefits li {
  margin-bottom: 6px;
}
</style>
