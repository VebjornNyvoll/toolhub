import { createTRPCRouter } from "./trpc";
import { advertRouter } from "./routers/advert";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  advertisment: advertRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
