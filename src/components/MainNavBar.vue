<template>
  <q-header elevated class="navbar-premium">
    <q-toolbar class="toolbar q-px-lg">
      <!-- LOGO -->
      <div class="row items-center no-wrap">
        <q-img src="src/assets/LogomarcaAçai.png" class="logo" fit="contain" />
        <span class="brand gt-xs">Açaí na Garrafa</span>
      </div>

      <q-space />

      <!-- LINKS DESKTOP -->
      <div class="gt-sm nav-links">
        <a v-for="l in links" :key="l.href" :href="l.href">{{ l.label }}</a>
      </div>

      <!-- MENU MOBILE -->
      <q-btn flat round dense icon="menu" class="lt-md" color="white" @click="drawer = true" />
    </q-toolbar>
  </q-header>

  <!-- DRAWER MOBILE -->
  <q-drawer v-model="drawer" side="right" overlay class="drawer-premium">
    <div class="drawer-header">
      <q-img src="src/assets/LogomarcaAçai.png" class="drawer-logo" />
    </div>

    <q-list padding>
      <q-item
        v-for="l in links"
        :key="l.href"
        clickable
        v-ripple
        :href="l.href"
        @click="drawer = false"
      >
        <q-item-section class="text-center text-weight-medium">
          {{ l.label }}
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Fotos', href: '#fotos' },
  { label: 'Sabores', href: '#sabores' },
  { label: 'Porque Nós', href: '#contato' },
  { label: 'Preparo', href: '#preparo' },
  { label: 'Feedbacks', href: '#feedbacks' },
  { label: 'Contato', href: '#contato' },
]
</script>

<style scoped>
.navbar-premium {
  background: rgba(62, 31, 92, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.toolbar {
  height: 72px;
}

.logo {
  width: 46px;
  margin-right: 10px;
}

.brand {
  color: white;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.nav-links a {
  color: white;
  margin-left: 22px;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding-bottom: 4px;
}

.nav-links a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 2px;
  background: var(--roxo-claro);
  transition: width 0.25s ease;
}

.nav-links a:hover::after {
  width: 100%;
}

/* DRAWER */
.drawer-premium {
  background: linear-gradient(180deg, #3e1f5c, #5a2d82);
  color: white;
}

.drawer-header {
  padding: 24px 0;
  display: flex;
  justify-content: center;
}

.drawer-logo {
  width: 120px;
}
</style>
