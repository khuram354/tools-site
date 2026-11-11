// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import critters from "astro-critters";
import compress from "@playform/compress";
import partytown from "@astrojs/partytown";
import { blogPosts } from "./src/data/blog-data/blog-posts.ts";
import { allTools } from "./src/data/tools.ts";
import { LAST_UPDATED as SALARY_TAX_UPDATED } from "./src/data/tax-data/pakistan-salaried.ts";

// Build time par lookup maps (ek baar bante hain)
const blogDateMap = new Map(
    blogPosts.map((p) => [p.href, p.updatedDate ?? p.isoDate]),
);

const toolDateMap = new Map(
    allTools.filter((t) => t.updatedDate).map((t) => [t.href, t.updatedDate]),
);

// Salary tax calculator ki pakki date (data file se)
toolDateMap.set("/tools/salary-tax-calculator/", SALARY_TAX_UPDATED);

// https://astro.build/config
export default defineConfig({
    site: "https://toolsvibe.online",
    trailingSlash: "always",
    build: { format: "directory" },
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [
        sitemap({
            filter: (page) => !page.includes("/404"),
            serialize(item) {
                const pathname = new URL(item.url).pathname;
                const date =
                    blogDateMap.get(pathname) ?? toolDateMap.get(pathname);

                if (date) {
                    item.lastmod = `${date}T00:00:00.000Z`;
                } else {
                    // Pakki date nahi → lastmod omit (false date se behtar)
                    delete item.lastmod;
                }
                return item;
            },
        }),
        critters(),
        compress({
            CSS: true,
            HTML: true,
            JavaScript: true,
            SVG: false,
            Image: false,
        }),
        partytown({
            config: {
                forward: ["dataLayer.push", "gtag"],
            },
        }),
    ],
});
