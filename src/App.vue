<script setup>
import ThemeSwitcher from './components/ThemeSwitcher.vue';
import HeroSection from './components/HeroSection.vue';
import ContactSection from './components/ContactSection.vue';
</script>

<template>
  <div
    class="app-wrapper relative min-h-screen text-[#0f172a] bg-[#f8fafc] dark:bg-[#020617] dark:text-[#f8fafc] transition-colors duration-400 font-outfit overflow-x-hidden">
    <nav class="glass fixed top-[1.5rem] left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[1000px] z-[100] py-3">
      <div class="container flex items-center justify-between">
        <div
          class="text-[1.5rem] font-extrabold bg-gradient-to-br from-[#6366f1] to-[#f472b6] bg-clip-text text-transparent">
          X.M
        </div>
        <div>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>

    <main>
      <HeroSection />
      <ContactSection />
    </main>
    
    <footer class="text-center py-16 text-[#475569] dark:text-[#94a3b8]">
      <div class="container">
        <p>&copy; 2026 Xusainboyev Muhammadjon. Barcha huquqlar himoyalangan.</p>
      </div>
    </footer>
  </div>
</template>
