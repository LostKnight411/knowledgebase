import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import embeds from 'astro-embed/integration';
import tailwind from '@astrojs/tailwind';
import metaTags from 'astro-meta-tags';
import starlightImageZoomPlugin from 'starlight-image-zoom';
import AstroPWA from '@vite-pwa/astro';

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
				globPatterns: ['**/!(404).{css,js,html,svg,png,ico,txt,json}'],
				navigateFallback: '/',
			},
			experimental: {
				directoryAndTrailingSlashHandler: true,
			},
			manifest: {
				id: 'the-great-outdoors',
				name: 'The Great Outdoors',
				short_name: 'TGO',
				description: 'Your guide to camping, hiking, and backpacking.',
				orientation: 'portrait',
				display: 'standalone',
				theme_color: '#137c5a',
				background_color: '#222222',
				icons: [
					{
						src: 'pwa-64x64.png',
						sizes: '64x64',
						type: 'image/png',
					},
					{
						src: 'pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: 'pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any',
					},
					{
						src: 'maskable-icon-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'maskable',
					},
				],
			},
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
