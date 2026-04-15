<template>
  <div :class="{ 'subpage-mode': isSubpage }">
    <ShaderHero />
    <Navbar />

    <main>
      <router-view />
    </main>

    <footer class="footer">
      <div class="social">
        <a
          href="https://www.linkedin.com/in/rebecca-biebl-a94918211/"
          target="_blank"
        >
          <i class="bx bxl-linkedin"></i>
        </a>
        <a href="https://github.com/RyanAella" target="_blank">
          <i class="bx bxl-github"></i>
        </a>
      </div>

      <ul class="list">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About Me</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/privacy">Privacy Policy</router-link></li>
        <li><router-link to="/impressum">Impressum</router-link></li>
      </ul>

      <p class="copyright">&copy; 2024 Rebecca Biebl | All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Navbar from "./components/Navbar.vue";
import ShaderHero from "./components/ShaderHero.vue";

const route = useRoute();
const isSubpage = computed(() => route.path !== "/");
</script>

<style>
/* Hier könnten globale Styles stehen, 
   aber wir importieren ja schon die style.css in der main.js */
</style>
