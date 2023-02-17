import { createTRPCRouter } from "./trpc";
import { advertRouter } from "./routers/advert";
import { profileRouter } from "./routers/profile";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  advertisement: advertRouter,
  profile: profileRouter,
});



// export type definition of API
export type AppRouter = typeof appRouter;
