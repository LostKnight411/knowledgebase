// import type { APIRoute } from "astro";

// export const prerender = false;

// // https://tina.io/docs/reference/self-hosted/tina-backend/vercel-functions/

// import {
// 	TinaNodeBackend,
// 	LocalBackendAuthProvider,
// 	createDatabase,
// 	createLocalDatabase,
// } from "@tinacms/datalayer";
// import { TinaAuthJSOptions, AuthJsBackendAuthProvider } from "tinacms-authjs";
// import { RedisLevel } from "upstash-redis-level";

// const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";
// const branch =
// 	process.env.GITHUB_BRANCH ||
// 	process.env.VERCEL_GIT_COMMIT_REF ||
// 	process.env.HEAD ||
// 	"main";

// const databaseClient = isLocal
// 	? createLocalDatabase()
// 	: createDatabase({
// 			databaseAdapter: new RedisLevel({
// 				namespace: branch,
// 				redis: {
// 					url: process.env.KV_REST_API_URL || "http://localhost:8079",
// 					token: process.env.KV_REST_API_TOKEN || "example_token",
// 				},
// 				debug: process.env.DEBUG === "true" || false,
// 			}),
// 		});

// const authProvider = isLocal
// 	? LocalBackendAuthProvider()
// 	: AuthJsBackendAuthProvider({
// 			authOptions: TinaAuthJSOptions({
// 				databaseClient: databaseClient,
// 				secret: process.env.NEXTAUTH_SECRET!,
// 			}),
// 		});

// const tinaHandler = TinaNodeBackend({
// 	authProvider,
// 	databaseClient,
// });

// export default (req: any, res: any) => {
// 	// Modify the request here if you need to
// 	return tinaHandler(req, res);
// };

// export const POST: APIRoute = ({ request }) => {
// 	return new Response(
// 		JSON.stringify({
// 			data: request.body,
// 		}),
// 		{ status: 200 }
// 	);
// };
