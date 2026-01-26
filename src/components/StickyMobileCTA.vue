<template>
  <div class="sticky-cta" v-show="isMobile">
    <q-btn
      color="green"
      icon="mdi-whatsapp"
      label="Pedir agora"
      class="full-width"
      :href="link"
      target="_blank"
      unelevated
      size="lg"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const isMobile = computed(() => $q.screen.lt.md)

const link = 'https://wa.me/5577988890597?text=Quero%20pedir%20um%20açaí%20na%20garrafa%20🍇'
</script>

<style scoped>
.sticky-cta {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px;
  background: white;
  z-index: 1000;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.15);
}
</style>
