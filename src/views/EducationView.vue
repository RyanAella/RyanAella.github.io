<template>
  <div class="content-flow">
    <section
      v-for="section in timelineData"
      :key="section.id"
      :id="section.id"
      class="timeline-section"
      :style="{ transform: `rotate(${section.rotation}deg) translateZ(0)` }"
    >
      <LineNumbers
        :count="section.items.length * 4"
        :start="section.startLine"
      />
      <h2 class="heading">{{ section.title }}</h2>
      <div class="timeline-items">
        <div
          v-for="item in section.items"
          :key="item.date"
          class="timeline-item"
        >
          <div class="timeline-dot"><i :class="item.icon"></i></div>
          <div class="timeline-date">{{ item.date }}</div>
          <div class="timeline-content">
            <h3>{{ item.institution }}</h3>
            <p>{{ item.title }}</p>
            <p v-if="item.description" class="item-description">
              {{ item.description }}
            </p>
            <a
              v-if="item.link"
              :href="item.link"
              target="_blank"
              class="ref-link"
            >
              <i class="bx bxs-file-pdf"></i>
              <span>{{ item.linkText }}</span>
              <span class="ref-tag">Official Publication</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Download CV -->
    <section class="download-section">
      <LineNumbers :count="1" :start="19" />
      <h2 class="heading">Download CV</h2>
      <div style="text-align: center">
        <a href="#" class="btn" @click.prevent="alert('Download coming soon!')"
          >CV (PDF)</a
        >
      </div>
    </section>
  </div>
</template>

<script setup>
import LineNumbers from "../components/LineNumbers.vue";

const timelineData = [
  {
    id: "education",
    title: "Education",
    rotation: 1,
    startLine: 1,
    items: [
      {
        icon: "bx bxs-graduation",
        date: "09/2019 – 08/2024",
        institution: "Heilbronn University",
        title: "Bachelor of Science - Software Engineering",
      },
      {
        icon: "bx bxs-school",
        date: "03/2019 – 08/2019",
        institution: "Heilbronn University",
        title: "Bachelor of Science - Automotive Systems Engineering",
      },
      {
        icon: "bx bxs-wrench",
        date: "09/2015 – 02/2018",
        institution: "Bertrandt Engineering GmbH",
        title: "Apprenticeship as Automotive Mechatronics Technician",
      },
      {
        icon: "bx bxs-chip",
        date: "09/2014 – 02/2015",
        institution: "Heilbronn University",
        title: "Mechatronics and Microsystems Engineering",
      },
      {
        icon: "bx bxs-shield",
        date: "01/2014 – 02/2014",
        institution: "German Armed Forces",
        title: "Basic Military Training",
      },
      {
        icon: "bx bxs-book-bookmark",
        date: "08/2003 – 06/2012",
        institution: "Mönchsee-Gymnasium Heilbronn",
        title: "General Higher Education Entrance Qualification",
      },
    ],
  },
  {
    id: "career",
    title: "Professional Experience",
    rotation: -1,
    startLine: 11,
    items: [
      {
        icon: "bx bx-code-alt",
        date: "from 10/2024",
        institution: "Heilbronn University",
        title:
          "Research Associate (KITE II Project) - AI-driven resilience application.",
        description:
          "Focusing on bias detection in AI algorithms and building resilience tools for entrepreneurs.",
        link: "https://opus-hshn.bsz-bw.de/frontdoor/deliver/index/docId/493/file/20260106_KITE_Dokumentation_.pdf",
        linkText: "KITE Project Documentation",
      },
      {
        icon: "bx bxs-car-mechanic",
        date: "02/2018 – 02/2019",
        institution: "Bertrandt Engineering GmbH",
        title: "Test Mechanic",
      },
      {
        icon: "bx bx-briefcase-alt-2",
        date: "2013 – 2015",
        institution: "Various Part-Time Jobs",
        title: "Production Assistant, Sales Assistant, Au Pair USA",
      },
    ],
  },
  {
    id: "internships",
    title: "Internships",
    rotation: 1,
    startLine: 16,
    items: [
      {
        icon: "bx bx-code-block",
        date: "08/2021 – 02/2022",
        institution: "Bertrandt Engineering GmbH",
        title: "Software and Tool Development",
      },
      {
        icon: "bx bxs-wrench",
        date: "03/2015 – 08/2015",
        institution: "Kaufland & Bosch",
        title: "Retail Assistant & Automotive Mechatronics Technician",
      },
    ],
  },
];
</script>

<style scoped>
.timeline-content {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(136, 160, 112, 0.2);
  box-shadow: none;
  margin-top: 1rem;
}

.timeline-content:hover {
  background: rgba(136, 160, 112, 0.05);
  border-color: var(--main-color);
  transform: translateX(10px);
}
.ref-link {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: 1.5rem;
  padding: 0.8rem 1.5rem;
  color: var(--main-color);
  font-size: 1.4rem;
  border: 1px solid var(--main-color);
  transition: all 0.3s ease;
  font-family: var(--font-code);
}
.ref-link:hover {
  background: var(--main-color);
  color: var(--bg-color);
}
.ref-tag {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: rgba(136, 160, 112, 0.2);
  padding: 2px 6px;
  margin-left: 10px;
}
.item-description {
  font-size: 1.4rem;
  opacity: 0.8;
  margin-top: 0.5rem;
  line-height: 1.4;
}
</style>
