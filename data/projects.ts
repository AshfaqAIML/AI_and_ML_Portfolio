// data/projects.ts
import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "vi-cbir",
    title: "Content-Based Medical Image Retrieval (CBMIR)",
    subtitle: "Vision Transformer-based medical image similarity search with explainable AI",
    description:
      "A Master's-level CBMIR system that retrieves visually similar medical images using a Vision Transformer (ViT) for deep feature extraction and FAISS for efficient similarity search. Includes Explainable AI (XAI) techniques to provide visual insights into which regions of the input image contribute most to retrieval, improving transparency and interpretability for clinical applications.",
    tags: ["Vision Transformer", "FAISS", "Explainable AI", "Medical Imaging", "PyTorch", "Similarity Search"],
    metrics: [
      { label: "Feature Extractor", value: "ViT" },
      { label: "Search Index", value: "FAISS" },
    ],
    github: "https://github.com/DarAshfaqDev/Content-Based-Medical-Image-Retrieval-CBMIR",
    demo: "",
    featured: true,
  },
  {
    id: "flower-clustering",
    title: "Object Classification by Unsupervised Learning with VGG16 + KMeans",
    subtitle: "Unsupervised image clustering using deep feature extraction and K-Means",
    description:
      "An unsupervised image clustering pipeline that combines VGG16 deep feature extraction with K-Means clustering to group unlabeled images into semantically meaningful categories. Features PCA dimensionality reduction, Elbow Method for optimal k determination, and Silhouette Score evaluation — a classic transfer learning + clustering hybrid with zero ground-truth labels required.",
    tags: ["VGG16", "PCA", "K-Means", "Unsupervised Learning", "Transfer Learning", "Computer Vision"],
    metrics: [
      { label: "Clusters Formed", value: "5" },
      { label: "Dataset Images", value: "61" },
    ],
    github: "https://github.com/DarAshfaqDev/Object-Classification-by-Unsupervised-Learning-with-VGG16-KMeans",
    demo: "",
  },
  {
    id: "weather-analytics",
    title: "Weather Analytics & Forecasting Platform",
    subtitle: "End-to-end weather monitoring, visualization, and ML forecasting",
    description:
      "An end-to-end AI/ML platform that collects real-time weather data from the Open-Meteo API, stores historical records in SQLite, performs trend analysis, visualizes weather patterns, and generates short-term forecasts using multiple ML models (Linear Regression, Random Forest, Prophet, XGBoost). Features an interactive Streamlit dashboard with multi-city comparison, anomaly detection via Isolation Forest, and 24-hour to 7-day forecast horizons.",
    tags: ["Open-Meteo API", "Time-Series Forecasting", "Prophet", "XGBoost", "Streamlit", "SQLite", "Anomaly Detection"],
    metrics: [
      { label: "Forecast Models", value: "4" },
      { label: "Cities Tracked", value: "5" },
    ],
    github: "https://github.com/DarAshfaqDev/Weather-Analytics-Forecasting-Platform",
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
  },
];
