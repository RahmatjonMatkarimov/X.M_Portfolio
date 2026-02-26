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
  <section id="contact" class="contact-section container">
    <div class="section-header">
      <h2 class="section-title">Bog'lanish</h2>
      <p class="section-subtitle">Menga istalgan platforma orqali xabar yozishingiz mumkin</p>
    </div>

    <div class="contact-grid">
      <a v-for="contact in contacts" 
         :key="contact.name" 
         :href="contact.link" 
         target="_blank"
         class="contact-card glass">
        <div class="icon-wrapper" :style="{ backgroundColor: contact.color + '20', color: contact.color }">
          <component :is="contact.icon" :size="32" />
        </div>
        <div class="card-info">
          <h3>{{ contact.name }}</h3>
          <p>{{ contact.value }}</p>
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 6rem 1rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: clamp(1.5rem, 8vw, 2.5rem);
  margin-bottom: 1rem;
}

.section-subtitle {
  color: var(--text-secondary);
  font-size: 1.1rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 0 auto;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
              background 0.4s ease, 
              border-color 0.4s ease;
  text-decoration: none;
  color: inherit;
}

.contact-card:hover {
  transform: translateY(-8px);
  border-color: var(--accent-color);
  background: var(--accent-glow);
}

.icon-wrapper {
  width: 64px;
  height: 64px;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.card-info h3 {
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
}

.card-info p {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

@media (max-width: 640px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
