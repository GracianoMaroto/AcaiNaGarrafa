<template>
  <section class="section how-premium" id="preparo">
    <h2 class="section-title text-center">Como funciona</h2>

    <div class="timeline">
      <div v-for="(step, i) in steps" :key="i" class="timeline-item">
        <div class="icon-wrapper">
          <q-icon :name="step.icon" size="34px" color="white" />
        </div>

        <div class="content glass-card">
          <h4>{{ step.title }}</h4>
          <p>{{ step.desc }}</p>
        </div>

        <div v-if="i < steps.length - 1" class="line" />
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    icon: 'mdi-food',
    title: 'Escolha seu sabor',
    desc: 'Tradicional, morango ou maracujá — você decide.',
  },
  {
    icon: 'mdi-blender',
    title: 'Batemos na hora',
    desc: 'Tudo feito no momento para garantir cremosidade.',
  },
  {
    icon: 'mdi-motorbike',
    title: 'Entrega rápida',
    desc: 'Chega geladinho pra você se refrescar.',
  },
]
</script>

<style scoped>
.how-premium {
  background:
    radial-gradient(circle at top right, #8e5fbf22, transparent 60%),
    linear-gradient(180deg, #ffffff, #f4eedc);
}

/* TIMELINE BASE */
.timeline {
  max-width: 900px;
  margin: 60px auto 0;
  display: flex;
  justify-content: space-between;
  position: relative;
}

/* ITEM */
.timeline-item {
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* ICON */
.icon-wrapper {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--roxo-principal), var(--roxo-claro));
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.25);
}

/* CARD */
.content {
  margin-top: 18px;
  padding: 22px 20px;
  border-radius: 22px;
  text-align: center;
  max-width: 240px;
}

/* LINE */
.line {
  position: absolute;
  top: 32px;
  right: -50%;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--roxo-claro), transparent);
  z-index: 1;
}

/* MOBILE = VERTICAL */
@media (max-width: 768px) {
  .timeline {
    flex-direction: column;
    align-items: center;
  }

  .timeline-item {
    margin-bottom: 60px;
  }

  .line {
    width: 4px;
    height: 60px;
    top: 70px;
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    background: linear-gradient(180deg, var(--roxo-claro), transparent);
  }
}
</style>
