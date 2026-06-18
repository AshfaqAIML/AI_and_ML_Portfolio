// data/site.ts
// Central source of truth for personal / brand data.
// Extracted & adapted from the reference repo (Dar-Ishfaq-1/My_Portfolio_Website)
// and reframed for an AI/ML Engineer positioning.
//
// NOTE ON CONTACT DETAILS:
// The reference repo's README lists dar1.ishfaq36@gmail.com as the contact email.
// Its contact.html page, however, lists a different name's email/phone
// (likely leftover template data that was never replaced). That mismatched
// info was deliberately NOT carried over here. Replace PHONE below with your
// real number, and double-check EMAIL before deploying.

export const site = {
  name: "Ishfaq Dar",
  role: "AI / ML Engineer",
  tagline: "Building Intelligent Systems with AI & Machine Learning",
  subTagline:
    "AI/ML Engineer specializing in Computer Vision, Deep Learning, Intelligent Retrieval Systems, and Explainable AI.",
  location: "Kashmir, India",
  email: "dar1.ishfaq36@gmail.com",
  phone: "", // confirm + add your number — see note above
  resumeUrl: "/resume/Ishfaq_Dar_AI_ML_Resume.pdf",
  profileImage: "/images/profile.png",
  social: {
    github: "https://github.com/Dar-Ishfaq-1",
    linkedin: "https://www.linkedin.com/in/ishfaq-ahmad-dar-aaa277240/",
    leetcode: "https://leetcode.com/Dar-Ishfaq-1/",
    email: "mailto:dar1.ishfaq36@gmail.com",
  },
  seo: {
    title: "Ishfaq Dar — AI / ML Engineer | Computer Vision & Deep Learning",
    description:
      "Portfolio of Ishfaq Dar, an AI/ML Engineer specializing in Computer Vision, Deep Learning, Vision Transformers, Explainable AI, and Intelligent Retrieval Systems.",
    url: "https://ishfaqdar.dev",
    keywords: [
      "AI Engineer",
      "Machine Learning Engineer",
      "Computer Vision Engineer",
      "Deep Learning Engineer",
      "AI Research Engineer",
      "Python Developer",
      "Artificial Intelligence Portfolio",
      "Ishfaq Dar",
    ],
  },
  stats: [
    { label: "Projects Shipped", value: 13 },
    { label: "Technologies", value: 28 },
    { label: "Research Projects", value: 3 },
    { label: "Certifications", value: 6 },
  ],
};

export type SiteData = typeof site;
