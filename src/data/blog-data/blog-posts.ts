// Central data for every blog post. The homepage, the blog index, and (later)
// the blog post pages all read from this file.
//
// To add a post: add ONE entry to `rawPosts` below. Write the date as
// "YYYY-MM-DD" (isoDate). The display date is made from it, and the list is
// sorted newest first automatically, so the order of entries does not matter.

export type BlogCategoryId =
  | "pakistan-tax"
  | "image-tools"
  | "word-counter"
  | "qr-codes"
  | "json";

export interface BlogCategory {
  id: BlogCategoryId;
  label: string; // shown on the site
  description: string; // used on the blog index page
  toolHrefs: string[]; // our tools that belong with these guides
}

// The order here is the order of the category buttons on the blog index.
export const blogCategories: BlogCategory[] = [
  {
    id: "pakistan-tax",
    label: "Pakistan Tax & Zakat",
    description:
      "Guides to salary tax, freelancer tax, Zakat on gold, and legal ways to save tax in Pakistan, with step-by-step examples and links to our calculators.",
    toolHrefs: [
      "/tools/salary-tax-calculator/",
      "/tools/freelancer-tax-calculator/",
      "/tools/zakat-calculator/",
      "/tools/emi-calculator/",
    ],
  },
  {
    id: "image-tools",
    label: "Image Tools",
    description:
      "How to resize, compress, crop, and convert images for websites, Instagram, WordPress, and Discord using free browser-based tools.",
    toolHrefs: [
      "/tools/image-compressor/",
      "/tools/image-resizer/",
      "/tools/image-cropper/",
      "/tools/image-converter/",
    ],
  },
  {
    id: "word-counter",
    label: "Word Counter",
    description:
      "How to count words and characters accurately: in Google Docs, for essays and blog posts, and for X (Twitter) posts.",
    toolHrefs: ["/tools/word-counter/"],
  },
  {
    id: "qr-codes",
    label: "QR Codes",
    description:
      "What QR codes are, how to scan them on iPhone and Android, and how to create your own for links, text, and Wi-Fi.",
    toolHrefs: ["/tools/qr-generator/"],
  },
  {
    id: "json",
    label: "JSON",
    description:
      "Beginner-friendly introductions to JSON, common syntax errors and how to fix them, and how JSON compares with XML.",
    toolHrefs: ["/tools/json-formatter/"],
  },
];

export interface BlogPost {
  title: string;
  description: string;
  href: string;
  isoDate: string; // "2026-10-23", for schema, <time datetime>, and sorting
  date: string; // "October 23, 2026", for display
  category: string; // the category label, e.g. "Image Tools"
  categoryId: BlogCategoryId;
}

interface RawPost {
  title: string;
  description: string;
  href: string;
  isoDate: string;
  category: BlogCategoryId;
}

const rawPosts: RawPost[] = [
  {
    title: "Freelancing Tax in Pakistan 2026-27: Rates, PSEB & Filing",
    description:
      "Freelancing tax in Pakistan explained: 0.25% PSEB rate vs 1%, how tax is deducted, PSEB registration, filing steps and a freelancer tax calculator guide.",
    href: "/blog/freelancing-tax-pakistan/",
    isoDate: "2026-10-23",
    category: "pakistan-tax",
  },
  {
    title: "QR Code Generator: Free, Custom & Bulk Options (2026)",
    description:
      "Use a free QR code generator to make codes for links, text and WiFi. Add a logo, go bulk or offline, and avoid scanning mistakes. Step-by-step guide.",
    href: "/blog/qr-code-generator/",
    isoDate: "2026-10-21",
    category: "qr-codes",
  },
  {
    title: "How to Calculate Zakat on Gold (2026 Guide)",
    description:
      "Learn how to calculate Zakat on gold. Covers Nisab, carat conversion, current prices, and a free online calculator for Pakistan.",
    href: "/blog/how-to-calculate-zakat-gold/",
    isoDate: "2026-10-20",
    category: "pakistan-tax",
  },
  {
    title: "How to Resize an Image for Instagram (2026 Guide)",
    description:
      "Learn how to resize images for Instagram. Covers post, story, and reel dimensions, safe zones, and a free browser-based tool.",
    href: "/blog/how-to-resize-image-instagram/",
    isoDate: "2026-10-20",
    category: "image-tools",
  },
  {
    title: "Salary Tax Calculator Pakistan 2026-27 — Free Online Tool",
    description:
      "Free salary tax calculator for Pakistan. Calculate your monthly take-home salary, FBR income tax, and EOBI deductions for Tax Year 2027 (FY 2026-27) instantly.",
    href: "/blog/salary-tax-calculator-pakistan/",
    isoDate: "2026-10-17",
    category: "pakistan-tax",
  },
  {
    title: "How to Resize Images in WordPress (Free Guide 2026)",
    description:
      "Learn how to resize images in WordPress without plugins, using the free browser-based tool. Fix blurry images, slow pages, and wrong dimensions.",
    href: "/blog/resize-images-wordpress/",
    isoDate: "2026-10-16",
    category: "image-tools",
  },
  {
    title: "How to Compress Images for Discord (Free Guide 2026)",
    description:
      "Learn how to compress images for Discord to fit the 8MB upload limit. Free browser-based tool, no signup, works on any device.",
    href: "/blog/compress-images-discord/",
    isoDate: "2026-10-16",
    category: "image-tools",
  },
  {
    title: "How to Bulk Resize Images Online (Free Guide 2026)",
    description:
      "Learn how to bulk resize images online for free. Resize multiple photos at once for e-commerce, social media, and websites without losing quality.",
    href: "/blog/bulk-resize-images/",
    isoDate: "2026-10-16",
    category: "image-tools",
  },
  {
    title: "How to Compress Images for Website (2026 Guide)",
    description:
      "Learn how to compress images for your website without losing quality. Includes tools, formats, and best practices for faster page loads.",
    href: "/blog/compress-images-for-website/",
    isoDate: "2026-10-15",
    category: "image-tools",
  },
  {
    title: "How to Save Tax in Pakistan (2026-27): 7 Legal Ways",
    description:
      "Discover 7 legal ways to save income tax in Pakistan for Tax Year 2027. Includes VPS, life insurance, donations, and other FBR-approved tax credits.",
    href: "/blog/how-to-save-tax-pakistan/",
    isoDate: "2026-10-12",
    category: "pakistan-tax",
  },
  {
    title: "How to Calculate Salary Tax in Pakistan (2026-27 Guide)",
    description:
      "Learn how to calculate your salary tax in Pakistan for Tax Year 2027 (FY 2026-27). Includes FBR tax slabs, step-by-step calculation, and a free online tax calculator.",
    href: "/blog/salary-tax-pakistan/",
    isoDate: "2026-10-11",
    category: "pakistan-tax",
  },
  {
    title: "JSON vs XML: What's the Difference? (2026 Guide)",
    description:
      "JSON vs XML compared: syntax, size, speed, use cases, and which one you should use. Includes real examples and a free JSON formatter tool.",
    href: "/blog/json-vs-xml/",
    isoDate: "2026-10-10",
    category: "json",
  },
  {
    title: "10 Common JSON Errors and How to Fix Them (2026 Guide)",
    description:
      "Learn the most common JSON syntax errors developers make and how to fix them fast. Includes real examples and a free online JSON validator.",
    href: "/blog/common-json-errors/",
    isoDate: "2026-10-09",
    category: "json",
  },
  {
    title: "How to Count Words for Twitter/X Posts (2026 Character Limit Guide)",
    description:
      "Learn the exact character limit for Twitter/X posts, how to count characters before posting, and how to avoid the over-limit warning.",
    href: "/blog/twitter-character-count/",
    isoDate: "2026-10-08",
    category: "word-counter",
  },
  {
    title: "How to Scan a QR Code on Android (2026 Guide)",
    description:
      "Learn how to scan QR codes on Android using Google Lens, the Camera app, or Quick Settings. Includes troubleshooting tips.",
    href: "/blog/scan-qr-code-android/",
    isoDate: "2026-10-08",
    category: "qr-codes",
  },
  {
    title: "How to Scan a QR Code on iPhone (2026 Guide)",
    description:
      "Learn how to scan QR codes on iPhone using the Camera app, Control Center, or Photos app. Step-by-step guide.",
    href: "/blog/scan-qr-code-iphone/",
    isoDate: "2026-10-05",
    category: "qr-codes",
  },
  {
    title: "How to Count Words Across All Tabs in Google Docs (2026)",
    description:
      "Google Docs shows word count for one tab only. Learn how to count words across all tabs with a simple workaround.",
    href: "/blog/word-count-google-docs-all-tabs/",
    isoDate: "2026-10-05",
    category: "word-counter",
  },
  {
    title: "How to Count Words Accurately (2026 Guide)",
    description:
      "Learn how to count words accurately for essays, blogs, and social media. Free online word counter tool included.",
    href: "/blog/how-to-count-words/",
    isoDate: "2026-10-02",
    category: "word-counter",
  },
  {
    title: "What is a QR Code and How Does It Work? (Complete 2026 Guide)",
    description:
      "Learn what QR codes are, how they work, and how to create your own free QR code online.",
    href: "/blog/what-is-qr-code/",
    isoDate: "2026-10-02",
    category: "qr-codes",
  },
  {
    title: "JSON Explained: A Beginner's Guide (2026)",
    description:
      "Learn what JSON is, why developers use it, and how to format JSON online for free.",
    href: "/blog/json-explained/",
    isoDate: "2026-10-02",
    category: "json",
  },
];

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

const categoryById = new Map(blogCategories.map((c) => [c.id, c]));

// Newest first, whatever order the entries were written in
export const blogPosts: BlogPost[] = rawPosts
  .map((p) => {
    const cat = categoryById.get(p.category);
    if (!cat) {
      // Stops the build if a post uses a category that does not exist
      throw new Error(`Unknown blog category "${p.category}" in ${p.href}`);
    }
    return {
      title: p.title,
      description: p.description,
      href: p.href,
      isoDate: p.isoDate,
      date: formatDate(p.isoDate),
      category: cat.label,
      categoryId: p.category,
    };
  })
  .sort((a, b) => b.isoDate.localeCompare(a.isoDate));

// Latest N posts (used on the homepage)
export function getLatestPosts(count: number = 3): BlogPost[] {
  return blogPosts.slice(0, count);
}

export function getPostByHref(href: string): BlogPost | undefined {
  return blogPosts.find((p) => p.href === href);
}

export function getPostsByCategory(id: BlogCategoryId): BlogPost[] {
  return blogPosts.filter((p) => p.categoryId === id);
}

// Other posts from the same category, newest first (for "Related guides")
export function getRelatedPosts(href: string, count: number = 3): BlogPost[] {
  const current = getPostByHref(href);
  if (!current) return [];
  return blogPosts
    .filter((p) => p.categoryId === current.categoryId && p.href !== href)
    .slice(0, count);
}