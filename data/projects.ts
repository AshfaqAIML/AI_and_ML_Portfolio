// data/projects.ts
import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "vi-cbir",
    title: "VI-CBIR",
    subtitle: "Vision Transformer-Based Content-Based Image Retrieval",
    description:
      "An explainable image retrieval engine that embeds medical images with a Vision Transformer, indexes them with FAISS for sub-second similarity search, and overlays Grad-CAM heatmaps so clinicians can see exactly why a result was retrieved. Shipped with a Gradio demo for interactive querying.",
    tags: ["Vision Transformer", "FAISS", "Explainable AI", "Grad-CAM", "Medical Imaging", "Gradio"],
    metrics: [
      { label: "Top-5 Retrieval Accuracy", value: "92%" },
      { label: "Query Latency", value: "<400ms" },
    ],
    github: "https://github.com/Dar-Ishfaq-1",
    demo: "",
    featured: true,
  },
  {
    id: "medical-retrieval",
    title: "Medical Image Retrieval Platform",
    subtitle: "Deep feature similarity search for clinical imaging",
    description:
      "A retrieval platform that extracts deep CNN features from medical scans and ranks similar historical cases by embedding distance, designed to support differential diagnosis workflows with fast, similarity-ranked case lookup.",
    tags: ["Similarity Search", "Deep Learning", "Feature Extraction", "Computer Vision"],
    metrics: [
      { label: "Indexed Images", value: "10K+" },
      { label: "Mean Avg. Precision", value: "0.87" },
    ],
    github: "https://github.com/Dar-Ishfaq-1",
    demo: "",
  },
  {
    id: "flower-clustering",
    title: "Flower Clustering System",
    subtitle: "Unsupervised visual grouping with deep features",
    description:
      "An unsupervised pipeline that extracts VGG16 embeddings from flower images, compresses them with PCA, and clusters species using K-Means — turning raw pixels into clean, explainable visual groupings with no labels required.",
    tags: ["VGG16", "PCA", "K-Means", "Unsupervised Learning"],
    metrics: [
      { label: "Silhouette Score", value: "0.71" },
      { label: "Species Clustered", value: "5" },
    ],
    github: "https://github.com/Dar-Ishfaq-1",
    demo: "",
  },
  {
    id: "weather-analytics",
    title: "Weather Analytics Dashboard",
    subtitle: "Live forecasting & visualization",
    description:
      "A real-time analytics dashboard that pulls live weather data through public APIs, visualizes historical trends, and surfaces short-term forecasts through a clean, data-dense interface built end-to-end in Python.",
    tags: ["APIs", "Data Visualization", "Forecasting", "Python"],
    metrics: [
      { label: "Cities Tracked", value: "20+" },
      { label: "Refresh Interval", value: "15 min" },
    ],
    github: "https://github.com/Dar-Ishfaq-1",
    demo: "",
  },
  {
    id: "text-to-sql",
    title: "Text-to-SQL Agent",
    subtitle: "Natural language to SQL queries using Gemini AI",
    description:
      "A full-stack AI application that converts natural language questions into SQL queries using Google Gemini AI, executes them safely on a SQLite database, and displays results in real time through a React-based web interface. Features schema-aware SQL generation with SELECT-only safety validation and Flask RESTful backend.",
    tags: ["Gemini AI", "LLM", "Text-to-SQL", "Flask", "React", "SQLite", "Natural Language Processing"],
    metrics: [
      { label: "Backend", value: "Flask + Python" },
      { label: "Frontend", value: "React + Tailwind" },
    ],
    github: "https://github.com/DarAshfaqDev/Text_to_SQL_Agent",
    demo: "",
    featured: false,
  },
];
