// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import critters from "astro-critters";
import compress from "@playform/compress";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
    site: "https://toolsvibe.online",
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [sitemap(), critters(), compress({
        CSS: true,
        HTML: true,
        JavaScript: true,
        SVG: false,
        Image: false,
    }), partytown()],
});