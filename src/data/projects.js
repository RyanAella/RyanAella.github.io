export const projectsData = [
  {
    id: "noise-terrain",
    title: "Noise-based Dynamic Terrain Generation",
    category: "Games",
    description:
      "My Bachelor Thesis project exploring procedural terrain generation using Unity Compute Shaders, FBM, and domain warping.",
    fullDescription:
      "This research project focuses on offloading heavy procedural calculations to the GPU. By using Compute Shaders, we achieved real-time performance for high-density heightmaps.",
    techStack: ["Unity", "C#", "HLSL", "Compute Shaders"],
    lessonsLearned:
      "Deep understanding of GPU parallelization and noise algorithms (Perlin vs. Simplex). Optimization of memory transfer between CPU and GPU.",
    image:
      "/images/Prototyp-einer-noise-basierten-Geländegenerierung-mit-Unity-Compute-Shadern.png",
    gallery: ["/images/placeholder-1.jpg", "/images/placeholder-2.jpg"],
    link: "https://github.com/RyanAella/Unity-ComputeShader-Terrain-Generator",
    rotation: 1,
  },
  {
    id: "natures-symphony",
    title: "Nature's Symphony",
    category: "Games",
    description:
      "A 3D ecosystem simulation featuring dynamic predator-prey relationships between fox and hare populations.",
    fullDescription:
      "A multi-agent simulation where entities make decisions based on hunger, energy, and surroundings. Features a procedurally generated environment.",
    techStack: ["Unity", "C#", "AI (Behavior Trees)", "Procedural Mesh"],
    lessonsLearned:
      "Balancing complex ecological systems and managing large-scale agent simulations without performance drops.",
    image: "/images/Nature-s-Symphony-Labor-Games-SS-23.png",
    gallery: ["/images/placeholder-1.jpg"],
    link: "https://github.com/RyanAella/ProceduralGeneration",
    rotation: -1,
  },
  {
    id: "world-gen-2d",
    title: "2D World Generator",
    category: "Games",
    description:
      "Procedural 2D map generator using Perlin and Open Simplex Noise with biome classification.",
    fullDescription:
      "A tile-based generator that creates diverse biomes based on moisture and temperature maps derived from layered noise functions.",
    techStack: ["C#", "Algorithm Design", "Game Engines"],
    lessonsLearned:
      "Implementing custom tile-mapping systems and refining biome transition logic for aesthetic results.",
    image: "/images/2D-World-Generator-GameEngines-WS-22-23.png",
    link: "https://github.com/RyanAella/2D-World-Generator",
    rotation: 1,
  },
];
