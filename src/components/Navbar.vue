<template>
  <header class="header">
    <div class="decoration" style="top: 5%; left: 5%; font-size: 3rem">
      010110
    </div>
    <router-link to="/" class="logo">Rebecca <span>Biebl</span></router-link>

    <i class="bx bx-menu" id="menu-icon" @click="isMenuOpen = !isMenuOpen"></i>

    <nav class="navbar" :class="{ active: isMenuOpen }">
      <router-link v-for="item in navItems" :key="item.path" :to="item.path">
        {{ item.name }}
      </router-link>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);
const navItems = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Education", path: "/education" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];
</script>
