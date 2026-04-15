<template>
  <div class="content-flow">
    <section>
      <LineNumbers :count="10" />
      <h2 class="heading">Impressum</h2>
      <p style="font-size: 1.6rem; line-height: 1.8">
        Angaben gemäß § 5 TMG:<br /><br />
        Rebecca Biebl<br />
        [Deine Adresse]<br />
        Email: [Deine Email]
      </p>
    </section>
  </div>
</template>
<script setup>
import LineNumbers from "../components/LineNumbers.vue";
</script>
