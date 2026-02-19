<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-vue-next';

const heroText = ref(null);
const heroSub = ref(null);
const heroCta = ref(null);

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  
  tl.from(heroText.value, {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.5
  })
  .from(heroSub.value, {
    y: 30,
    opacity: 0,
    duration: 0.8
  }, '-=0.5')
  .from(heroCta.value, {
    scale: 0.8,
    opacity: 0,
    duration: 0.6
  }, '-=0.3');
});
</script>

<template>
  <section class="hero container">
    <div class="hero-content">
      <h1 ref="heroText" class="title">
        Salom, Men <span class="gradient-text">Xusainboyev Muhammadjon</span><br>
        Professional Treder
      </h1>
      <p ref="heroSub" class="subtitle">
        Moliya bozorlari tahlilchisi va treder. Strategik trading va 
        bozor tahlili orqali muvaffaqiyatga erishish yo'lida.
      </p>
      <div ref="heroCta" class="cta-group">
        <a href="#contact" class="btn btn-primary">
          Bog'lanish <ArrowRight :size="20" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 4rem;
}

.title {
  font-size: clamp(1.8rem, 9vw, 4.5rem);
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.gradient-text {
  background: linear-gradient(135deg, var(--accent-color), #f472b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: clamp(0.95rem, 4vw, 1.25rem);
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto 2.5rem;
  line-height: 1.6;
}

.cta-group {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

@media (max-width: 768px) {
  .hero {
    min-height: 70vh;
  }
}
</style>
