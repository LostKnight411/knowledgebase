import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

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
				baseUrl: "https://github.com/tgoHQ/starlight/edit/main/",
			},
			social: {
				github: "https://github.com/tgoHQ",
				discord: "https://discord.gg/the-great-outdoors-345621611770282004",
			},
			sidebar: [
				{
					label: "Guides",
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: "Example Guide",
							link: "/guides/example/",
						},
					],
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
});
