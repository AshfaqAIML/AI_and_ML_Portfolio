// data/research.ts
import { ResearchInterest } from "@/types";

export const researchInterests: ResearchInterest[] = [
  {
    id: "cv",
    title: "Computer Vision",
    description:
      "Visual perception systems that generalize across imaging domains, from natural scenes to medical scans.",
    icon: "Eye",
  },
  {
    id: "vit",
    title: "Vision Transformers",
    description:
      "Attention-based architectures for image understanding, retrieval, and dense prediction tasks.",
    icon: "Grid3x3",
  },
  {
    id: "xai",
    title: "Explainable AI",
    description:
      "Grad-CAM, attention rollout, and saliency methods that make model decisions auditable.",
    icon: "ScanSearch",
  },
  {
    id: "medai",
    title: "Medical AI",
    description:
      "Retrieval and diagnostic-support systems that respect clinical constraints and interpretability needs.",
    icon: "Stethoscope",
  },
  {
    id: "retrieval",
    title: "Retrieval Systems",
    description:
      "Embedding-based search at scale — FAISS indexing, approximate nearest neighbors, re-ranking.",
    icon: "SearchCode",
  },
  {
    id: "dl",
    title: "Deep Learning",
    description:
      "Architecture design, optimization, and training dynamics across CNNs, RNNs, and Transformers.",
    icon: "Network",
  },
  {
    id: "multimodal",
    title: "Multimodal AI",
    description:
      "Joint vision-language representations for retrieval, captioning, and grounded reasoning.",
    icon: "Combine",
  },
  {
    id: "genai",
    title: "Generative AI",
    description:
      "Generative modeling for synthesis, augmentation, and representation learning.",
    icon: "Sparkles",
  },
];
