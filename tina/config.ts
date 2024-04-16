import { defineConfig } from "tinacms";

// // Your hosting provider likely exposes this as an environment variable
// const branch =
// 	process.env.GITHUB_BRANCH ||
// 	process.env.VERCEL_GIT_COMMIT_REF ||
// 	process.env.HEAD ||
// 	"main";

export default defineConfig({
	branch: "main",

	clientId: process.env.TINA_CLIENT_ID!,

	build: {
		outputFolder: "admin",
		publicFolder: "public",
	},
	media: {
		tina: {
			mediaRoot: "",
			publicFolder: "public",
		},
	},
	// See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
	schema: {
		collections: [
			{
				label: "Docs",
				name: "docs",
				path: "src/content/docs",
				format: "mdx",
				fields: [
					{
						label: "Title",
						name: "title",
						type: "string",
						isTitle: true,
						required: true,
					},
					{
						label: "Description",
						name: "description",
						type: "string",
					},
					{
						label: "Sidebar",
						name: "sidebar",
						type: "object",
						fields: [
							{
								label: "Badge",
								name: "badge",
								type: "string",
							},
							{
								label: "Label",
								description: "The label to display in the sidebar",
								name: "label",
								type: "string",
							},
						],
					},
					{
						label: "Body",
						name: "body",
						type: "rich-text",
						isBody: true,
					},
				],
			},
		],
	},
});
