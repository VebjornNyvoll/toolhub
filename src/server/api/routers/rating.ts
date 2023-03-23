import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const ratingRouter = createTRPCRouter({
  getRatings: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.rating.findMany({
        where: {
          userRatedId: input.id,
        }
      });
    }),
  getAmountOfRatings: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.rating.count({
        where: {
          userRatedId: input.id,
        }
      });
    }),
  rate: protectedProcedure
    .input(
      z.object({
        rating: z.number(),
        userRatedId: z.string(),
        userRatingId: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.rating.upsert({
        where: {
          userRatedId_userRatingId : { userRatedId: input.userRatedId, userRatingId: input.userRatingId },
        },
        update: {
          rating: input.rating,
        },
        create: {
          userRatingId: input.userRatingId,
          userRatedId: input.userRatedId,
          rating: input.rating,
        },
      });
    },
    ),
});
