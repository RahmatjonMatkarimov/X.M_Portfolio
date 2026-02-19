<script setup>
import ThemeSwitcher from './components/ThemeSwitcher.vue';
import HeroSection from './components/HeroSection.vue';
import ContactSection from './components/ContactSection.vue';
</script>

<template>
  <div class="app-wrapper">
    <!-- Navigation -->
    <nav class="navbar glass">
      <div class="container nav-container">
        <div class="logo">X.M</div>
        <div class="nav-right">
          <ThemeSwitcher />
        </div>
      </div>
    </nav>

    <!-- Content -->
    <main>
      <HeroSection />
      <ContactSection />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>&copy; 2026 Xusainboyev Muhammadjon. Barcha huquqlar himoyalangan.</p>
      </div>
    </footer>
  </div>
</template>

<style>
.app-wrapper {
  position: relative;
  min-height: 100vh;
}

.navbar {
  position: fixed;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 3rem);
  max-width: 1000px;
  z-index: 100;
  padding: 0.75rem 0;
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--accent-color), #f472b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer {
  text-align: center;
  padding: 4rem 0;
  color: var(--text-secondary);
}
</style>
