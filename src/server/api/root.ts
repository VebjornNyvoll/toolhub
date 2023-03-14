import { createTRPCRouter } from "./trpc";
import { advertRouter } from "./routers/advert";
import { profileRouter } from "./routers/profile";
import { bookingRouter} from "./routers/booking"
 
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  advertisement: advertRouter,
  profile: profileRouter,
  booking: bookingRouter,
});



// export type definition of API
export type AppRouter = typeof appRouter;
