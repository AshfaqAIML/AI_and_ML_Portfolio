// data/timeline.ts
import { TimelineItem } from "@/types";

export const timeline: TimelineItem[] = [
  {
    id: "foundations",
    period: "2020",
    title: "Programming Foundations",
    description: "Built core problem-solving skills through C, C++, and Java during the BSc (Non-Medical) program.",
    status: "done",
  },
  {
    id: "python",
    period: "2021",
    title: "Python Development",
    description: "Shifted focus to Python for data work — scripting, automation, and early data analysis.",
    status: "done",
  },
  {
    id: "ml",
    period: "2022",
    title: "Machine Learning",
    description: "Learned classical ML — regression, classification, clustering, and model evaluation with Scikit-Learn.",
    status: "done",
  },
  {
    id: "dl",
    period: "2023",
    title: "Deep Learning",
    description: "Moved into neural networks with PyTorch and TensorFlow — CNNs, RNNs, and training pipelines.",
    status: "done",
  },
  {
    id: "cv",
    period: "2023 – 2024",
    title: "Computer Vision",
    description: "Specialized in image classification, feature extraction, and unsupervised visual clustering.",
    status: "done",
  },
  {
    id: "vit",
    period: "2024",
    title: "Vision Transformers",
    description: "Applied attention-based architectures to image retrieval, moving past convolutional baselines.",
    status: "done",
  },
  {
    id: "research",
    period: "2024 – 2025",
    title: "Research Projects",
    description: "Built VI-CBIR — an explainable, Vision Transformer–based retrieval system for medical imaging.",
    status: "current",
  },
  {
    id: "eng",
    period: "2025",
    title: "AI Engineering",
    description: "Focused on shipping production-grade AI systems: retrieval pipelines, APIs, and deployable demos.",
    status: "current",
  },
  {
    id: "future",
    period: "Next",
    title: "AI Research Engineer / Research Scientist",
    description: "Working toward a research-driven role pushing on explainable, vision-grounded AI systems.",
    status: "future",
  },
];
