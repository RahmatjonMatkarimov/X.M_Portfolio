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
  <section
    class="max-w-[1200px] mx-auto px-8 min-h-[80vh] md:min-h-[70vh] flex items-center justify-center text-center pt-[4rem]">
    <div class="hero-content">
      <h1 ref="heroText"
        class="text-[clamp(1.8rem,9vw,4.5rem)] mb-[1.5rem] text-[#0f172a] dark:text-[#f8fafc] font-extrabold leading-[1.2]">
        Salom, Men <span
          class="bg-gradient-to-br from-[#6366f1] to-[#f472b6] bg-clip-text text-transparent">Xusainboyev
          Muhammadjon</span><br>
        Professional Treder
      </h1>
      <p ref="heroSub"
        class="text-[clamp(0.95rem,4vw,1.25rem)] text-[#475569] dark:text-[#94a3b8] max-w-[700px] mx-auto mb-[2.5rem] leading-[1.6]">
        Moliya bozorlari tahlilchisi va treder. Strategik trading va
        bozor tahlili orqali muvaffaqiyatga erishish yo'lida.
      </p>
      <div ref="heroCta" class="flex justify-center gap-[1rem]">
        <a href="#contact"
          class="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold cursor-pointer transition-all duration-300">
          Bog'lanish
          <ArrowRight :size="20" />
        </a>
      </div>
    </div>
  </section>
</template>
