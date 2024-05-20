import { defineConfig } from "tsup";

export default defineConfig({
	entry: {
		index: "./src/index.ts",
		providers: "./src/providers/index.ts",
		adapters: "./src/adapters/index.ts",
		h3: "./src/integrations/h3.ts",
		next: "./src/integrations/next.ts",
		hono: "./src/integrations/hono.ts",
		"svelte-kit": "./src/integrations/svelte-kit.ts",
		plugins: "./src/plugins/index.ts",
		actions: "./src/actions/index.ts",
		//adapters
		"adapters/memory": "./src/adapters/memory.ts",
		"adapters/prisma-adapter": "./src/adapters/prisma.ts",
		"adapters/drizzle-adapter": "./src/adapters/drizzle.ts",
		"adapters/mongodb-adapter": "./src/adapters/mongodb.ts",
		"adapters/redis-adapter": "./src/adapters/redis.ts",
		//routes
		"routes/session": "./src/routes/session.ts",
	},
	splitting: false,
	sourcemap: true,
	format: "esm",
	dts: true,
	external: ["react", "svelte", "$app/environment", "next"],
});
