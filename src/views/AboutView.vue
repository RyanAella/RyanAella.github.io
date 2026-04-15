<template>
  <div class="content-flow">
    <div class="about-layout">
      <!-- Linke Spalte: Analoges Profil -->
      <section
        class="profile-card"
        style="transform: rotate(-2deg) translateZ(0)"
      >
        <LineNumbers :count="4" />
        <div class="polaroid">
          <img src="/images/image.jpg" alt="Rebecca Biebl" />
          <p class="caption">// rebecca_v1.4.bin</p>
        </div>
        <div class="bio-snippet">
          <h3>Who I am</h3>
          <p>
            A Software Engineer who finds as much beauty in a
            <strong>bug-free deployment</strong> as in a
            <strong>perfectly risen sourdough bread</strong>. I bridge the gap
            between high-tech research and high-touch handicrafts.
          </p>
        </div>
      </section>

      <!-- Rechte Spalte: Digitales Terminal & Stats -->
      <div class="side-content">
        <section
          class="terminal-section"
          style="transform: rotate(1deg) translateZ(0)"
        >
          <LineNumbers :count="4" />
          <div class="terminal-window">
            <div class="terminal-header">
              <span class="terminal-title">system_diagnostics.sh</span>
            </div>
            <div class="terminal-body">
              <div v-for="(log, index) in logs" :key="index" class="log-entry">
                <span class="prompt">> {{ log.cmd }}</span>
                <p class="terminal-response">{{ log.res }}</p>
              </div>
              <span class="prompt">></span> <span class="cursor">_</span>
            </div>
          </div>
        </section>

        <section
          class="stats-card"
          style="transform: rotate(-1deg) translateZ(0)"
        >
          <LineNumbers :count="3" />
          <h3 class="heading">Character Stats</h3>
          <div class="stats-grid">
            <div v-for="stat in stats" :key="stat.label" class="stat-item">
              <span class="stat-label">{{ stat.label }}</span>
              <div class="stat-bar-bg">
                <div
                  class="stat-bar-fill"
                  :style="{ width: stat.value + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import LineNumbers from "../components/LineNumbers.vue";

const logs = [
  { cmd: "whoami", res: "Software Engineer & Researcher" },
  { cmd: "grep passion", res: "Solving logical puzzles & textile textures" },
  { cmd: "ls ./focus_mode", res: "heavy_metal.mp3, deep_work.sh" },
];

const stats = [
  { label: "Code Quality", value: 92 },
  { label: "Creativity", value: 88 },
  { label: "Resilience", value: 95 },
  { label: "Baking", value: 75 },
];
</script>

<style scoped>
.about-layout {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3rem;
  align-items: start;
}

.polaroid {
  background: white;
  padding: 1.5rem 1.5rem 4rem 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  margin-bottom: 2rem;
}

.polaroid img {
  width: 100%;
  filter: sepia(0.2) contrast(1.1);
}

.caption {
  font-family: "JetBrains Mono", monospace;
  color: #333;
  font-size: 1.5rem;
  margin-top: 1.5rem;
  text-align: center;
}

.bio-snippet h3 {
  font-family: var(--font-code);
  color: var(--main-color);
  font-size: 2rem;
  margin-bottom: 1rem;
}

.bio-snippet p {
  font-size: 1.7rem;
  line-height: 1.8;
}

.stats-grid {
  margin-top: 1.5rem;
}

.stat-item {
  margin-bottom: 1.5rem;
}
.stat-label {
  font-family: var(--font-code);
  font-size: 1.2rem;
  display: block;
  margin-bottom: 0.5rem;
}
.stat-bar-bg {
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}
.stat-bar-fill {
  height: 100%;
  background: var(--main-color);
  border-radius: 4px;
  box-shadow: 0 0 10px var(--main-color);
}

@media (max-width: 955px) {
  .about-layout {
    grid-template-columns: 1fr;
  }
}
</style>
