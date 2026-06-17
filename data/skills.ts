// data/skills.ts
import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "ml",
    title: "Machine Learning",
    description: "Classical ML, model evaluation & feature engineering",
    icon: "BrainCircuit",
    items: [
      { name: "Scikit-Learn", level: 88 },
      { name: "XGBoost", level: 80 },
      { name: "Model Evaluation", level: 85 },
      { name: "Feature Engineering", level: 82 },
    ],
  },
  {
    id: "dl",
    title: "Deep Learning",
    description: "Neural network architectures & training pipelines",
    icon: "Layers",
    items: [
      { name: "PyTorch", level: 85 },
      { name: "TensorFlow", level: 78 },
      { name: "CNNs", level: 88 },
      { name: "RNNs", level: 72 },
      { name: "Transformers", level: 80 },
    ],
  },
  {
    id: "cv",
    title: "Computer Vision",
    description: "From classical CV to Vision Transformers",
    icon: "ScanEye",
    items: [
      { name: "OpenCV", level: 86 },
      { name: "Vision Transformers", level: 80 },
      { name: "Object Detection", level: 74 },
      { name: "Segmentation", level: 70 },
      { name: "Image Classification", level: 88 },
    ],
  },
  {
    id: "nlp",
    title: "NLP & LLMs",
    description: "Language model applications & retrieval",
    icon: "MessageSquareText",
    items: [
      { name: "Hugging Face", level: 78 },
      { name: "Transformers", level: 76 },
      { name: "LLM Applications", level: 74 },
    ],
  },
  {
    id: "ds",
    title: "Data Science",
    description: "Analysis, wrangling & visualization",
    icon: "ChartSpline",
    items: [
      { name: "Pandas", level: 92 },
      { name: "NumPy", level: 90 },
      { name: "Matplotlib", level: 85 },
      { name: "Seaborn", level: 82 },
    ],
  },
  {
    id: "db",
    title: "Databases",
    description: "Relational & document stores",
    icon: "Database",
    items: [
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 76 },
      { name: "MongoDB", level: 70 },
    ],
  },
  {
    id: "prog",
    title: "Programming",
    description: "Core languages & systems thinking",
    icon: "Terminal",
    items: [
      { name: "Python", level: 92 },
      { name: "C++", level: 70 },
      { name: "Java", level: 65 },
      { name: "SQL", level: 80 },
    ],
  },
];

// Flattened view used for the radar chart overview
export const radarData = skillCategories.map((c) => ({
  category: c.title,
  score: Math.round(
    c.items.reduce((sum, i) => sum + i.level, 0) / c.items.length
  ),
}));
