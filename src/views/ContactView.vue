<template>
  <div class="content-flow subpage-mode">
    <section class="contact" id="contact" style="transform: rotate(1deg)">
      <div class="line-numbers">01<br />02<br />03</div>
      <h2 class="heading">Contact</h2>

      <form
        action="https://script.google.com/macros/s/AKfycbwWHcG0ZogJkm-JsxLDB1cZpMOrD53anuRWG_tr0TvYsWmLNiDqgvCHsLz-0_0mjnsdUA/exec"
        method="post"
      >
        <div class="input-box">
          <input
            type="text"
            name="Full_Name"
            placeholder="Full Name"
            required
          />
          <input type="email" name="Email" placeholder="Email" required />
        </div>
        <div class="input-box">
          <input type="text" name="Subject" placeholder="Subject" required />
        </div>

        <textarea
          name="Your_Message"
          cols="30"
          rows="10"
          placeholder="Your Message"
          required
        ></textarea>
        <input type="submit" value="Send Message" class="btn" />
      </form>
    </section>
  </div>
</template>

<script setup></script>
