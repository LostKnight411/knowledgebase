import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import embeds from 'astro-embed/integration';
import tailwind from '@astrojs/tailwind';
import metaTags from 'astro-meta-tags';
import starlightImageZoomPlugin from 'starlight-image-zoom';
import AstroPWA from '@vite-pwa/astro';
import manifest from './webmanifest.json';
import type { ManifestOptions } from 'vite-plugin-pwa';

// https://astro.build/config
export default defineConfig({
	site: 'https://starlight-lovat.vercel.app/',
	prefetch: {
		prefetchAll: true,
		defaultStrategy: 'load',
	},
	integrations: [
		AstroPWA({
			mode: 'production',
			registerType: 'autoUpdate',
			includeAssets: ['favicon.svg'],
			workbox: {
				navigateFallback: '/',
				globPatterns: ['**/*.{css,js,html,svg,png,ico.txt}'],
			},
			experimental: {
				directoryAndTrailingSlashHandler: true,
			},
			manifest: manifest as Partial<ManifestOptions>,
		}),
		starlight({
			title: 'The Great Outdoors',
			logo: {
				src: './src/assets/brand/wordmark.svg',
				replacesTitle: true,
			},
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
			},
			customCss: ['./src/tailwind.css'],
			social: {
				discord:
					'https://discord.gg/the-great-outdoors-345621611770282004',
				github: 'https://github.com/tgoHQ/knowledgebase',
			},
			components: {
				Head: './src/components/starlight/Head.astro',
				PageSidebar: './src/components/starlight/PageSidebar.astro',
			},
			sidebar: [
				{
					label: 'Home',
					link: '/',
				},
				{
					label: 'Contributing',
					badge: {
						text: 'New',
						variant: 'note',
					},
					autogenerate: {
						directory: 'contribute',
					},
				},
			],
			plugins: [starlightImageZoomPlugin()],
		}),
		tailwind({
			applyBaseStyles: false,
		}),
		metaTags(),
		embeds({
			services: {
				LinkPreview: true,
				YouTube: true,
			},
		}),
	],
});
