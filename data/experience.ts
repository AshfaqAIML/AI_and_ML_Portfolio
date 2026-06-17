// data/experience.ts
import { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    id: "research-vicbir",
    role: "Independent Researcher",
    org: "VI-CBIR — Vision Transformer Image Retrieval",
    period: "2024 – Present",
    type: "research",
    bullets: [
      "Designed and built an explainable, Vision Transformer–based content image retrieval system for medical imaging.",
      "Implemented FAISS-based approximate nearest neighbor search for sub-second similarity queries.",
      "Integrated Grad-CAM explainability so retrieved results are visually auditable rather than a black box.",
      "Shipped an interactive Gradio demo for end-to-end querying and result inspection.",
    ],
  },
  {
    id: "intern-360digitmg",
    role: "Data Analytics Intern",
    org: "360DigiTMG — Medical Inventory Optimization",
    period: "2024",
    type: "project",
    bullets: [
      "Used Python and statistical analysis to clean and explore inventory and procurement data.",
      "Built data-driven recommendations for reorder levels, reducing stockout and overstock risk.",
      "Translated exploratory analysis into clear, decision-ready insights for non-technical stakeholders.",
    ],
  },
  {
    id: "academic-projects",
    role: "Applied ML Coursework & Projects",
    org: "MSc Information Technology",
    period: "2023 – 2025",
    type: "learning",
    bullets: [
      "Coursework spanning Machine Learning, Big Data Analytics, Statistical Methods, and Database Systems.",
      "Applied classical ML and deep learning techniques across coursework projects, from model selection to evaluation.",
    ],
  },
  {
    id: "opensource",
    role: "Open Source & Public Repositories",
    org: "github.com/Dar-Ishfaq-1",
    period: "Ongoing",
    type: "opensource",
    bullets: [
      "Maintains public repositories covering computer vision, retrieval systems, and data analytics projects.",
      "Documents experiments and pipelines for reproducibility and review.",
    ],
  },
];
