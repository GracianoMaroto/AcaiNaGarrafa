<template>
  <q-btn
    v-if="!isMobile"
    round
    size="lg"
    icon="call"
    class="floating"
    :href="link"
    target="_blank"
  />
</template>

<script setup>
import { computed } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const isMobile = computed(() => $q.screen.lt.md)

const link = 'https://wa.me/5577988890597?text=Oi!%20Quero%20pedir%20um%20açaí%20na%20garrafa%20🍇'
</script>

<style scoped>
.floating {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  background-color: rgb(25, 192, 25);
  color: white;
}
</style>
