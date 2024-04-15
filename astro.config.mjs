import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// import { rehypeHeadingIds } from "@astrojs/markdown-remark";
// import rehypeAutolinkHeadings from "rehype-autolink-headings";

import tailwind from "@astrojs/tailwind";
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
				github: "https://github.com/tgoHQ",
				discord: "https://discord.gg/the-great-outdoors-345621611770282004",
			},
			components: {
				Head: "./src/components/starlight/Head.astro",
			},
			sidebar: [
				{
					label: "Guides",
					autogenerate: {
						directory: "guides",
					},
				},
				{
					label: "Reference",
					autogenerate: {
						directory: "reference",
					},
				},
				{
					label: "External Resources",
					collapsed: true,
					items: [
						{
							label: "Lighterpack",
							link: "https://lighterpack.com",
							attrs: {
								target: "_blank",
								rel: "noopener",
							},
						},
					],
				},
			],
		}),
		tailwind({
			applyBaseStyles: false,
		}),
	],
	site: "https://starlight-lovat.vercel.app/",
	markdown: {
		// https://hideoo.dev/notes/starlight-heading-links
		// rehypePlugins: [
		// 	rehypeHeadingIds,
		// 	[rehypeAutolinkHeadings, { behavior: "prepend" }],
		// ],
	},
});
