import { $ } from "bun";

// Pull the environment variables from Vercel
await $`vercel env pull --environment=development .env.development`;
await $`vercel env pull --environment=staging .env.staging`;
await $`vercel env pull --environment=production .env.production`;
