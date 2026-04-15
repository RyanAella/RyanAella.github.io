<template>
  <div class="content-flow">
    <section style="transform: rotate(-0.5deg) translateZ(0)">
      <LineNumbers :count="15" />
      <h2 class="heading">Privacy Policy</h2>
      <div class="privacy-content">
        <p>
          This website is a personal portfolio. No personal data is actively
          collected or stored by the operator.
        </p>

        <h3>Server Log Files</h3>
        <p>
          The provider of the pages automatically collects and stores
          information in so-called server log files, which your browser
          automatically transmits (e.g., IP address, browser type, time of
          request). This is necessary for technical reasons and is handled by
          the hosting provider (GitHub Pages).
        </p>

        <h3>External Links</h3>
        <p>
          This site contains links to external websites (e.g., GitHub,
          LinkedIn). I have no influence over the content or data collection
          practices of these third-party sites.
        </p>

        <h3>Contact Form</h3>
        <p>
          If you send me inquiries via the contact form, your details from the
          inquiry form, including the contact data you provided there, will be
          stored for the purpose of processing the inquiry and in case of
          follow-up questions.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import LineNumbers from "../components/LineNumbers.vue";
</script>

<style scoped>
.privacy-content h3 {
  color: var(--main-color);
  margin: 2rem 0 1rem;
  font-family: var(--font-code);
  font-size: 1.8rem;
}
.privacy-content p {
  font-size: 1.6rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}
</style>
