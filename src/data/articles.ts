export interface Article {
  title: string;
  platform: string;
  url: string;
  publishedDate: string;
  summary: string;
  tags?: string[];
}

export const ARTICLES: Article[] = [
  {
    title: "Understanding Machine Learning Basics",
    platform: "Medium",
    url: "https://medium.com/@hasindu/understanding-ml-basics-abc123",
    publishedDate: "March 2025",
    summary:
      "An introductory article breaking down key concepts in machine learning with simple examples.",
    tags: ["ML", "AI", "Beginner"],
  },
  {
    title: "Effective Database Design Patterns",
    platform: "Dev.to",
    url: "https://dev.to/hasindu/effective-db-design-patterns-xyz456",
    publishedDate: "April 2025",
    summary:
      "Discussing scalable and maintainable patterns for designing databases in modern applications.",
    tags: ["Databases", "Design Patterns", "Software Engineering"],
  },
];
