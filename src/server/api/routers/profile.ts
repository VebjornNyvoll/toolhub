import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const profileRouter = createTRPCRouter({
  getLoggedInUser: publicProcedure.query(({ ctx }) => {
    if (!ctx.session) {
      return null;
    }
    return ctx.prisma.user.findUnique({ where: { id: ctx.session.user.id } });
  }),
  getUser: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.user.findUnique({ where: { id: input.id } });
    }),
  create: protectedProcedure
    .input(
      z.object({
        phone: z.string(),
        address: z.string(),
        city: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.user.update({
        where: { id: ctx.session.user.id },
        data: {
          phone: input.phone,
          address: input.address,
          city: input.city,
        },
      });
    }),
  addRating: protectedProcedure
    .input(
      z.object({
        rating: z.number(),
        amountraters: z.number(),
        userid: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.user.update({
        where: { id: input.userid },
        data: {
          totalRatings: input.amountraters,
          totalRatingpoints: input.rating,
        },
      });
    }),
});
