<template>
  <div class="content-flow">
    <section class="bestiary-section">
      <!-- Konsistente Zeilennummern wie in anderen Views -->
      <LineNumbers :count="entities.length * 6 + 4" />

      <h2 class="heading">_THE_BESTIARY</h2>
      <p class="intro-text">Cataloging biological and digital lifeforms.</p>

      <div class="bestiary-grid">
        <div
          v-for="item in entitiesWithRotation"
          :key="item.id"
          class="bestiary-card"
          :style="{
            transform: `perspective(1px) rotate(${item.rotation}deg) translateZ(0)`,
          }"
        >
          <div class="image-wrapper">
            <!-- Fallback, falls Bilder fehlen -->
            <img
              :src="item.image"
              :alt="item.name"
              @error="
                (e) =>
                  (e.target.src =
                    'https://via.placeholder.com/300x200?text=Terrarium+Entry')
              "
            />
            <div class="rarity-tag" :class="item.rarity.toLowerCase()">
              {{ item.rarity }}
            </div>
          </div>

          <div class="card-content">
            <h3>{{ item.name }}</h3>
            <p class="entity-type">{{ item.type }}</p>
            <p class="entity-description">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import LineNumbers from "../components/LineNumbers.vue";
import { bestiaryData as entities } from "../data/bestiary.js";

// Berechnet eine leichte Rotation für jede Karte, um das "Chaos" Design-Prinzip beizubehalten
const entitiesWithRotation = entities.map((item, index) => ({
  ...item,
  rotation: (index % 2 === 0 ? 0.8 : -0.8) * ((index % 3) + 1),
}));
</script>

<style scoped>
.intro-text {
  font-family: var(--font-code);
  font-size: 1.4rem;
  color: var(--main-color);
  margin-bottom: 3rem;
  opacity: 0.8;
}

.bestiary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.bestiary-card {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(136, 160, 112, 0.2);
  transition: all 0.3s ease;
  overflow: hidden;
  cursor: crosshair;
  /* Stabilisiert die Schrift bei Rotationen */
  backface-visibility: hidden;
  -webkit-font-smoothing: subpixel-antialiased;
}

html.light-mode .bestiary-card {
  background: var(--second-bg-color);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.05);
}

.bestiary-card:hover {
  border-color: var(--main-color);
  transform: scale(1.05) rotate(0deg) !important; /* Richtet sich beim Hovern gerade aus */
  border-color: #a335ee; /* Ein kurzer Glow in Epic-Lila (oder dem Grün deines Titels) */
  box-shadow: 0 0 15px rgba(163, 53, 238, 0.3); /* Subtiler Glow */
}

.image-wrapper {
  position: relative;
  height: 200px;
  background: #000;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Hier passiert die Magie: */
  filter: grayscale(100%) contrast(1.2) brightness(0.7) blur(1px);
  opacity: 0.5;
  transition: all 0.4s ease-in-out;
}

html.light-mode .image-wrapper img {
  filter: grayscale(30%) contrast(1.1) brightness(0.95);
  opacity: 0.9;
}

.bestiary-card:hover .image-wrapper img {
  filter: grayscale(0%) contrast(1) brightness(1) blur(0px);
  opacity: 1;
  transform: scale(1.05); /* Ein kleiner Zoom-Effekt macht es organischer */
}

.rarity-tag {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 4px 10px;
  font-size: 10px;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.8);
  font-family: var(--font-code);
  letter-spacing: 1px;
}

html.light-mode .rarity-tag {
  background: rgba(255, 255, 255, 0.9);
  color: var(--text-color);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.epic {
  color: #a335ee;
  border-left: 2px solid #a335ee;
}
.rare {
  color: #0070dd;
  border-left: 2px solid #0070dd;
}
.legendary {
  color: #ff8000;
  border-left: 2px solid #ff8000;
}

.card-content {
  padding: 1.5rem;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(80%) contrast(1.2) blur(1px); /* Düsterer, körniger Look */
  opacity: 0.6;
  transition: all 0.3s;
}

.entity-card:hover img {
  filter: grayscale(0%) contrast(1) blur(0px); /* Scharf und Farbig beim Hover */
  opacity: 1;
}

h3 {
  margin: 0;
  font-size: 2.2rem;
  font-weight: 600;
  color: var(--metal);
  font-family: var(--font-main);
}

.entity-type {
  color: var(--main-color);
  font-family: var(--font-code);
  font-size: 1.2rem;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
}

.entity-description {
  font-size: 1.6rem;
  line-height: 1.6;
  opacity: 0.95;
  text-shadow: none; /* Verhindert, dass feine Serifen krakelig wirken */
  font-weight: 400;
  font-variant-ligatures: common-ligatures;
}
</style>
