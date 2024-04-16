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
				src: "./src/assets/logo.svg",
			},
			customCss: ["./src/tailwind.css"],
			editLink: {
				baseUrl: "https://github.com/tgoHQ/knowledgebase/edit/main/",
			},
			social: {
				discord: "https://discord.gg/the-great-outdoors-345621611770282004",
				github: "https://github.com/tgoHQ",
			},
			components: {
				Head: "./src/components/starlight/Head.astro",
			},
			sidebar: [
				{
					label: "Home",
					link: "/",
				},
				{
					label: "Contributing",
					collapsed: true,
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
		embeds(),
	],
	site: "https://starlight-lovat.vercel.app/",
	prefetch: {
		prefetchAll: true,
		defaultStrategy: "load",
	},
});
