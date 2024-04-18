import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import embeds from "astro-embed/integration";
import tailwind from "@astrojs/tailwind";
import metaTags from "astro-meta-tags";
import starlightImageZoomPlugin from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "The Great Outdoors",
			logo: {
				src: "./src/assets/brand/wordmark.svg",
				replacesTitle: true,
			},
			locales: {
				root: {
					label: "English",
					lang: "en",
				},
			},
			customCss: ["./src/tailwind.css"],
			social: {
				discord: "https://discord.gg/the-great-outdoors-345621611770282004",
				github: "https://github.com/tgoHQ/knowledgebase",
			},
			components: {
				Head: "./src/components/starlight/Head.astro",
				PageSidebar: "./src/components/starlight/PageSidebar.astro",
			},
			sidebar: [
				{
					label: "Home",
					link: "/",
				},
				{
					label: "Contributing",
					badge: {
						text: "New",
						variant: "note"
					},
					autogenerate: {
						directory: "contribute",
					},
				},
			],
			plugins: [starlightImageZoomPlugin()],
		}),
		tailwind({
			applyBaseStyles: false,
		}),
		metaTags(),
		// https://astro-embed.netlify.app/
		embeds({services: ["YouTube", "LinkPreview"]}),
	],
	site: "https://starlight-lovat.vercel.app/",
	prefetch: {
		prefetchAll: true,
		defaultStrategy: "load",
	},
});
