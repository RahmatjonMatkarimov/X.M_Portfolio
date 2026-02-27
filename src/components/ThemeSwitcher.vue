<script setup>
import { ref, onMounted } from 'vue';
import { Sun, Moon } from 'lucide-vue-next';

const isDark = ref(false);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  updateTheme();
};

const updateTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true;
  }
  updateTheme();
});
</script>

<template>
  <button @click="toggleTheme" class="bg-[rgba(255,255,255,0.6)] dark:bg-[rgba(15,23,42,0.6)]
           backdrop-blur-[8px] border border-[rgba(255,255,255,0.5)] dark:border-[rgba(255,255,255,0.1)]
           text-[#0f172a] dark:text-[#f8fafc] p-[0.75rem] rounded-[1rem] cursor-pointer
           flex items-center justify-center transition-all duration-300
           shadow-[0_4px_12px_rgba(0,0,0,0.1)] 
           hover:scale-[1.1] hover:bg-[rgba(99,102,241,0.2)] dark:hover:bg-[rgba(129,140,248,0.2)]"
    aria-label="Toggle Theme">
    <transition name="scale" mode="out-in">
      <Sun v-if="isDark" :size="24" />
      <Moon v-else :size="24" />
    </transition>
  </button>
</template>

<style scoped>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.2s ease;
}

.scale-enter-from,
.scale-leave-to {
  transform: scale(0) rotate(90deg);
  opacity: 0;
}
</style>
