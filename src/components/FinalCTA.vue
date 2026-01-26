<template>
  <section class="cta" v-intersect>
    <h2 class="section-title text-center">Pegou, tomou, amou.</h2>
    <p>Peça agora seu açaí artesanal na garrafa 🍇</p>

    <div class="q-mt-md">
      <q-btn
        color="green"
        icon="mdi-whatsapp"
        label="Pedir no WhatsApp"
        :href="whatsapp"
        target="_blank"
        class="q-mr-sm"
      />
      <q-btn
        color="secondary"
        icon="mdi-instagram"
        label="Instagram"
        href="https://instagram.com/acainagarrafavdc"
        target="_blank"
        outline
      />
    </div>
  </section>
</template>

<script setup>
const whatsapp = 'https://wa.me/5577988890597?text=Quero%20pedir%20um%20açaí%20na%20garrafa%20🍇'
</script>

<style scoped>
.cta {
  background: var(--roxo-escuro);
  color: white;
  text-align: center;
  padding: 80px 20px;
}
</style>
