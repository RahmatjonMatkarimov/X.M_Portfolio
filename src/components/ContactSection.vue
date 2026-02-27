<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, Send, Phone, Mail } from 'lucide-vue-next';

gsap.registerPlugin(ScrollTrigger);

const contactCards = ref(null);

const contacts = [
  {
    name: 'Telegram',
    value: '@xusa1nboyev_o1',
    link: 'https://t.me/xusa1nboyev_o1',
    icon: Send,
    color: '#0088cc'
  },
  {
    name: 'Instagram',
    value: '@xusainboyev_o1',
    link: 'https://instagram.com/xusainboyev_o1',
    icon: Instagram,
    color: '#e1306c'
  },
  {
    name: 'Telefon',
    value: '+998 88 736 03 13',
    link: 'tel:+998887360313',
    icon: Phone,
    color: '#10b981'
  },
  {
    name: 'Email',
    value: 'mxusainboyev01@gmail.com',
    link: 'mailto:mxusainboyev01@gmail.com',
    icon: Mail,
    color: '#6366f1'
  }
];

onMounted(() => {
  gsap.fromTo('.contact-card',
    {
      y: 40,
      opacity: 0
    },
    {
      scrollTrigger: {
        trigger: '.contact-grid',
        start: 'top 85%'
      },
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'back.out(1.7)'
    }
  );
});
</script>

<template>
  <section id="contact" class="max-w-[1200px] mx-auto px-4 pt-[9rem]">
    <div class="text-center mb-[4rem]">
      <h2
        class="text-[clamp(1.5rem,8vw,2.5rem)] font-extrabold mb-[1rem] leading-[1.2] text-[#0f172a] dark:text-[#f8fafc]">
        Bog'lanish</h2>
      <p class="text-[1.1rem] text-[#475569] dark:text-[#94a3b8]">Menga istalgan platforma orqali xabar yozishingiz
        mumkin</p>
    </div>

    <div class="contact-grid flex flex-wrap justify-center gap-[2rem] mx-auto">
      <a v-for="contact in contacts" :key="contact.name" :href="contact.link" target="_blank" class="contact-card glass flex-1 basis-[280px] min-w-[280px] flex items-center gap-[1.5rem] p-[1rem] no-underline text-inherit
               transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]
               hover:-translate-y-2 hover:border-[#6366f1] dark:hover:border-[#818cf8]
               hover:bg-[rgba(99,102,241,0.2)] dark:hover:bg-[rgba(129,140,248,0.2)]">
        <div class="w-[54px] h-[54px] rounded-[1rem] flex items-center justify-center flex-shrink-0"
          :style="{ backgroundColor: contact.color + '20', color: contact.color }">
          <component :is="contact.icon" :size="32" />
        </div>
        <div>
          <h3 class="text-[1.25rem] font-bold mb-[0.25rem] text-[#0f172a] dark:text-[#f8fafc]">{{ contact.name }}</h3>
          <p class="text-[#475569] dark:text-[#94a3b8]">{{ contact.value }}</p>
        </div>
      </a>
    </div>
  </section>
</template>
