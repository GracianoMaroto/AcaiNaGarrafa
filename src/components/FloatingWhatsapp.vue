<template>
  <q-btn
    round
    size="lg"
    color="green"
    icon="mdi-whatsapp"
    class="floating"
    :href="link"
    target="_blank"
  />
</template>

<script setup>
const link = 'https://wa.me/5577988890597?text=Oi!%20Quero%20pedir%20um%20açaí%20na%20garrafa%20🍇'
</script>

<style scoped>
.floating {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
}
</style>
