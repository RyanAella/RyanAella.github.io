<template>
  <div class="content-flow">
    <section class="projects" id="projects">
      <LineNumbers :count="filteredProjects.length + 5" />
      <h2 class="heading">Projects</h2>

      <div class="filter-group">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="currentFilter = cat"
          :class="{ active: currentFilter === cat }"
          class="filter-btn"
        >
          {{ cat }}
        </button>
      </div>

      <div class="projects-container">
        <div
          v-for="project in filteredProjects"
          :key="project.title"
          class="projects-box"
          :style="{ transform: `rotate(${project.rotation}deg) translateZ(0)` }"
        >
          <img :src="project.image" :alt="project.title" />
          <div class="projects-info">
            <h4>{{ project.title }}</h4>
            <p>{{ project.description }}</p>
            <router-link :to="'/projects/' + project.id" class="btn"
              >View Details</router-link
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import LineNumbers from "../components/LineNumbers.vue";
import { projectsData } from "../data/projects.js";

const currentFilter = ref("All");
const categories = ["All", "Games", "Research", "Web"];

const filteredProjects = computed(() => {
  if (currentFilter.value === "All") return projectsData;
  return projectsData.filter((p) => p.category === currentFilter.value);
});
</script>

<style scoped>
.filter-group {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
}
.filter-btn {
  background: transparent;
  border: 1px solid var(--main-color);
  color: var(--main-color);
  padding: 0.5rem 1.5rem;
  font-family: var(--font-code);
  cursor: pointer;
  transition: 0.3s;
}
.filter-btn.active,
.filter-btn:hover {
  background: var(--main-color);
  color: var(--bg-color);
}
.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
.projects-box {
  min-height: 400px;
  transition: all 0.4s ease;
  will-change: transform;
  backface-visibility: hidden;
  transform-style: preserve-3d;
}
.projects-box:hover {
  transform: scale(1.05) rotate(0deg) !important;
  z-index: 20;
}
.projects-info {
  opacity: 0.9 !important; /* Damit man die Info leichter sieht */
}
</style>
