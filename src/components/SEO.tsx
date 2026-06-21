import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { siteConfig } from "@/config/site";

interface SEOProps {
  title: string;
  description: string;
  /** Canonical path on the site (e.g. "/learn"). Defaults to current pathname. */
  canonicalPath?: string;
  /** Back-compat alias for canonicalPath. */
  path?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  /** Back-compat alias for ogImage. */
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  /** Single JSON-LD object or an array of them. */
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Per-route head tags. Overrides the static fallbacks in index.html so
 * shared links show page-specific previews on JS-executing crawlers.
 */
export function SEO({
  title,
  description,
  canonicalPath,
  path,
  ogTitle,
  ogDescription,
  ogImage,
  image,
  type = "website",
  noindex,
  structuredData,
}: SEOProps) {
  const location = useLocation();
  const routePath = canonicalPath ?? path ?? location.pathname;
  const url = `${siteConfig.url}${routePath}`;
  const finalOgTitle = ogTitle ?? title;
  const finalOgDescription = ogDescription ?? description;
  const finalImageRel = ogImage ?? image ?? siteConfig.ogImage;
  const finalImageAbs = finalImageRel.startsWith("http")
    ? finalImageRel
    : `${siteConfig.url}${finalImageRel}`;

  const jsonLdNodes = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta
        name="robots"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1"
        }
      />

      {/* Open Graph */}
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={siteConfig.locale} />
      <meta property="og:image" content={finalImageAbs} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      <meta name="twitter:image" content={finalImageAbs} />

      {jsonLdNodes.map((node, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(node)}
        </script>
      ))}
    </Helmet>
  );
}
