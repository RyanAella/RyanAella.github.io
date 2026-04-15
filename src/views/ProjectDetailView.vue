<template>
  <div class="content-flow" v-if="project">
    <section style="transform: rotate(0.5deg) translateZ(0)">
      <LineNumbers :count="20" />
      <router-link to="/projects" class="back-link"
        ><i class="bx bx-left-arrow-alt"></i> Back to Gallery</router-link
      >
      <h2 class="project-title">{{ project.title }}</h2>

      <div class="tech-tags">
        <span v-for="tech in project.techStack" :key="tech" class="tech-tag">{{
          tech
        }}</span>
      </div>

      <div class="detail-grid">
        <div class="detail-main">
          <img :src="project.image" class="main-img" />
          <div class="project-card">
            <h3>Lessons Learned</h3>
            <p>{{ project.lessonsLearned }}</p>
          </div>
        </div>

        <div class="detail-side">
          <div class="project-card">
            <h3>Project Overview</h3>
            <p>{{ project.fullDescription }}</p>
          </div>
          <div class="project-gallery" v-if="project.gallery">
            <div
              v-for="(img, index) in project.gallery"
              :key="index"
              class="gallery-item"
            >
              <img :src="img" alt="Project Screenshot" class="side-img" />
            </div>
          </div>
          <a :href="project.link" target="_blank" class="btn">View on GitHub</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import LineNumbers from "../components/LineNumbers.vue";
import { projectsData } from "../data/projects.js";

const route = useRoute();
const project = projectsData.find((p) => p.id === route.params.id);
</script>

<style scoped>
.back-link {
  color: var(--main-color);
  font-family: var(--font-code);
  margin-bottom: 2rem;
  display: block;
}
.project-title {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: var(--metal);
}
.tech-tags {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
}
.tech-tag {
  background: rgba(136, 160, 112, 0.1);
  border: 1px solid var(--main-color);
  padding: 4px 12px;
  font-family: var(--font-code);
  font-size: 1.2rem;
}
.detail-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
  margin-top: 2rem;
}
.main-img {
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 2rem;
}
.project-card {
  background: rgba(255, 255, 255, 0.03);
  padding: 2rem;
  border-radius: 4px;
  margin-bottom: 2rem;
}
.project-card h3 {
  color: var(--main-color);
  margin-bottom: 1rem;
  font-family: var(--font-code);
}
.project-card p {
  font-size: 1.6rem;
  line-height: 1.6;
}
.project-gallery {
  display: grid;
  gap: 1rem;
  margin-bottom: 2rem;
}
.side-img {
  width: 100%;
  border: 1px solid rgba(136, 160, 112, 0.2);
}
@media (max-width: 800px) {
  .detail-grid {
    grid-template-columns: 1fr;
  }
}
</style>
