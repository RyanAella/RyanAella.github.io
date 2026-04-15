<template>
  <div class="content-flow subpage-mode">
    <section
      class="skills"
      id="skills"
      style="transform: rotate(-1deg) translateZ(0)"
    >
      <LineNumbers :count="10" />
      <h2 class="heading">Skills</h2>

      <div class="code-snippet">
        <span style="color: var(--main-color)">namespace</span>
        <span style="color: var(--text-color)">CoreCompetencies</span> {<br />
        &nbsp;&nbsp;<span style="color: var(--main-color)">const</span> Graphics
        = [<span style="color: var(--bread)">'HLSL'</span>,
        <span style="color: var(--bread)">'ShaderLab'</span>,
        <span style="color: var(--bread)">'ComputeShaders'</span>];<br />
        &nbsp;&nbsp;<span style="color: var(--main-color)">const</span> Logic =
        [<span style="color: var(--bread)">'C#'</span>,
        <span style="color: var(--bread)">'Unity Engine'</span>];<br />
        &nbsp;&nbsp;<span style="color: var(--main-color)">const</span> Web =
        [<span style="color: var(--bread)">'HTML5'</span>,
        <span style="color: var(--bread)">'CSS3'</span>,
        <span style="color: var(--bread)">'JavaScript (ES6+)'</span>];<br />
        }
      </div>

      <div class="timeline-items">
        <div class="timeline-item">
          <div class="timeline-date">Programming</div>
          <div class="timeline-content">
            <p>
              Proficient in modern <strong>Web Development</strong> (HTML, CSS,
              JS). Experienced in <strong>Java</strong> and
              <strong>Python</strong>. Solid foundations in
              <strong>C/C++</strong>.
            </p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-date">Research & Workflow</div>
          <div class="timeline-content">
            <p>
              Agile development with <strong>Scrum</strong> and
              <strong>Git</strong>. Academic writing using
              <strong>LaTeX</strong>.
            </p>
          </div>
        </div>
      </div>

      <div class="toolbox">
        <h3 class="sub-heading">// stack_and_tools</h3>
        <div class="tag-container">
          <span v-for="tag in tags" :key="tag" class="skill-tag">
            {{ tag }}
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import LineNumbers from "../components/LineNumbers.vue";

const tags = [
  "Unity",
  "HLSL",
  "Compute Shaders",
  "C#",
  "C/C++",
  "Java",
  "Python",
  "Git",
  "LaTeX",
  "Scrum",
  "Linux",
];
</script>

<style scoped>
.toolbox {
  margin-top: 4rem;
  text-align: left;
}
.sub-heading {
  font-family: var(--font-code);
  color: var(--main-color);
  margin-bottom: 2rem;
  font-size: 1.6rem;
}
.tag-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.skill-tag {
  padding: 0.5rem 1.2rem;
  border: 1px solid rgba(136, 160, 112, 0.3);
  font-family: var(--font-code);
  font-size: 1.2rem;
  transition: 0.3s;
  cursor: default;
}
.skill-tag:hover {
  background: var(--main-color);
  color: var(--bg-color);
  border-color: var(--main-color);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(136, 160, 112, 0.3);
}
</style>
