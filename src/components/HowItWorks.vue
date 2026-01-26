<template>
  <section class="section bg-light" v-intersect>
    <h2 class="section-title text-center">Como funciona</h2>

    <div class="container">
      <q-stepper flat alternative-labels animated v-model="step">
        <q-step :name="1" title="Escolha o sabor" icon="mdi-food" />
        <q-step :name="2" title="Batemos na hora" icon="mdi-blender" />
        <q-step :name="3" title="Entrega rápida" icon="mdi-motorbike" />
      </q-stepper>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const step = ref(1)
</script>
