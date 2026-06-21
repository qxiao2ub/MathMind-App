/**
 * Central site config used by SEO, sitemap, structured data, and canonical URLs.
 * Update `url` here if the production domain changes.
 */
export const siteConfig = {
  name: "MathMind",
  url: "https://mathsmind.lovable.app",
  description:
    "MathMind helps Australian students learn maths with AI tutoring, curriculum-aligned lessons, quizzes, practice questions, and progress tracking.",
  ogImage: "/og-image.png",
  locale: "en_AU",
  twitter: "@mathmind",
} as const;

export const SITE_URL = siteConfig.url;
