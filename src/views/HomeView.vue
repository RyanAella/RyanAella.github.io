<template>
  <div class="content-flow">
    <section
      class="home"
      id="home"
      style="transform: rotate(1deg) translateZ(0)"
    >
      <LineNumbers :count="10" />
      <div class="home-img">
        <img src="/images/image.jpg" alt="Rebecca Biebl" />
      </div>
      <div class="home-content">
        <h3>// software engineer & researcher</h3>
        <p>
          I'm a <strong>Software Engineer</strong> and
          <strong>researcher</strong> passionate about developing innovative and
          meaningful technology solutions. Currently, I work as a
          <strong>scientific assistant in the KITE II research project</strong>,
          where we focus on creating AI-driven applications that support female
          entrepreneurs in building resilience.
        </p>
        <p>
          I hold a <strong>Bachelor's degree in Software Engineering</strong>,
          with a specialization in <strong>Games Engineering</strong>. My thesis
          explored procedural terrain generation using
          <strong>Unity Compute Shaders</strong> and Fractal Brownian Motion.
        </p>
        <p>
          Outside of tech, I enjoy creative pursuits like
          <strong>crocheting, knitting, and other handicrafts</strong>, which
          provide a refreshing balance to my projects.
        </p>
        <div class="social-icons">
          <a href="https://github.com/RyanAella" target="_blank"
            ><i class="bx bxl-github"></i
          ></a>
        </div>
        <div class="btn-group">
          <router-link to="/contact" class="btn">Contact</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import LineNumbers from "../components/LineNumbers.vue";
</script>
