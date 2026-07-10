<template>
  <canvas ref="canvas" class="shader-canvas"></canvas>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const canvas = ref(null);
let animationFrameId = null;

onMounted(() => {
  const gl = canvas.value.getContext("webgl");
  if (!gl) return;

  const vs = `
    attribute vec2 pos;
    void main() {
      gl_Position = vec4(pos, 0, 1);
    }
  `;

  const fs = `
    precision highp float;
    uniform float time;
    uniform vec2 res;

    // Pseudo-Zufallsfunktion
    float hash(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }

    // 2D Noise Funktion (Interpolation zwischen Zufallswerten)
    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      float a = hash(i);
      float b = hash(i + vec2(1.0, 0.0));
      float c = hash(i + vec2(0.0, 1.0));
      float d = hash(i + vec2(1.0, 1.0));
      vec2 u = f * f * (3.0 - 2.0 * f); // Smoothstep-Kurve
      return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }

    // FBM (Kombiniert mehrere Schichten Noise für Details)
    float fbm(vec2 p) {
      float v = 0.0;
      float amp = 0.5;
      for (int i = 0; i < 5; i++) {
        v += amp * noise(p);
        p *= 2.0;
        amp *= 0.5;
      }
      return v;
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / res.xy;
      uv.x *= res.x / res.y; // Aspekt-Korrektur, damit es nicht gestreckt ist

      // Wir bewegen die "Kamera" über das Gelände
      float height = fbm(uv * 3.0 + time * 0.2);

      // Einfaches Color-Grading basierend auf der Höhe
      vec3 water = vec3(0.1, 0.2, 0.4);
      vec3 land = vec3(0.2, 0.5, 0.2);
      vec3 mountain = vec3(0.5, 0.4, 0.3);
      vec3 snow = vec3(0.9, 0.9, 1.0);

      vec3 color = mix(water, land, smoothstep(0.3, 0.5, height));
      color = mix(color, mountain, smoothstep(0.5, 0.7, height));
      color = mix(color, snow, smoothstep(0.7, 0.9, height));

      gl_FragColor = vec4(color, 1.0);
    }
  `;

  const createShader = (gl, type, source) => {
    const s = gl.createShader(type);
    gl.shaderSource(s, source);
    gl.compileShader(s);
    return s;
  };

  const program = gl.createProgram();
  gl.attachShader(program, createShader(gl, gl.VERTEX_SHADER, vs));
  gl.attachShader(program, createShader(gl, gl.FRAGMENT_SHADER, fs));
  gl.linkProgram(program);
  gl.useProgram(program);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
    gl.STATIC_DRAW,
  );

  const pos = gl.getAttribLocation(program, "pos");
  gl.enableVertexAttribArray(pos);
  gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

  const timeLoc = gl.getUniformLocation(program, "time");
  const resLoc = gl.getUniformLocation(program, "res");

  const render = (t) => {
    if (!canvas.value) return;
    canvas.value.width = canvas.value.clientWidth;
    canvas.value.height = canvas.value.clientHeight;
    gl.viewport(0, 0, canvas.value.width, canvas.value.height);
    gl.uniform1f(timeLoc, t * 0.001);
    gl.uniform2f(resLoc, canvas.value.width, canvas.value.height);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    animationFrameId = requestAnimationFrame(render);
  };
  animationFrameId = requestAnimationFrame(render);
});

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
});
</script>

<style scoped>
.shader-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  opacity: 0.35;
  pointer-events: none;
}
</style>
