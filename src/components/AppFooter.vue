<template>
  <footer class="footer-premium">
    <div class="footer-container">
      <!-- BRAND -->
      <div class="footer-col brand text-center">
        <q-img src="/icons/LogomarcaAçai.png" class="footer-logo" />
        <p>
          Açaí artesanal na garrafa, feito na hora com ingredientes de qualidade. Refresque seu dia
          com muito sabor 💜
        </p>
        <h5>Contato</h5>
        <span>📍 Vitória da Conquista - BA</span>
        <span>📞 (77) 98889-0597</span>
        <span>🕒 Atendimento diário</span>
        <h5>Redes</h5>

        <div class="social flex flex-center">
          <q-btn round dense icon="call" class="social-btn" :href="whatsapp" target="_blank" />

          <q-btn
            round
            dense
            icon="ti-instagram"
            class="social-btn"
            href="https://instagram.com/acainagarrafavdc"
            target="_blank"
          />
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      © {{ new Date().getFullYear() }} Açaí na Garrafa — Todos os direitos reservados.
    </div>
  </footer>
</template>

<script setup>
const whatsapp = 'https://wa.me/5577988890597?text=Quero%20pedir%20um%20açaí%20na%20garrafa%20🍇'
</script>

<style scoped>
.footer-premium {
  background: linear-gradient(180deg, #1e0f2e, #14091f);
  color: #ddd;
  padding-top: 80px;
}

.footer-container {
  max-width: 700px;
  margin: 0 auto;
  padding: 0 24px 40px;

  display: flex;
  justify-content: center;
}

/* COL */
.footer-col h5 {
  color: white;
  margin-bottom: 14px;
  font-size: 1.05rem;
}

.footer-col a,
.footer-col span,
.footer-col p {
  display: block;
  color: #ccc;
  font-size: 0.95rem;
  margin-bottom: 10px;
  text-decoration: none;
}

.footer-col a:hover {
  color: var(--roxo-claro);
}

/* BRAND */
.brand p {
  margin-top: 14px;
  line-height: 1.5;
  max-width: 520px;
}

.footer-logo {
  width: 140px;
}

/* SOCIAL */
.social {
  display: flex;
  gap: 12px;
}

.social-btn {
  background: linear-gradient(135deg, var(--roxo-principal), var(--roxo-claro));
  color: white;
}

/* BOTTOM */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  text-align: center;
  padding: 16px;
  font-size: 0.8rem;
  color: #aaa;
}
</style>
