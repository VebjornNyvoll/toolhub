import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const ratingRouter = createTRPCRouter({
  // create: protectedProcedure
  //   .input(
  //     z.object({
  //       rating: z.number(),
  //       userRatedId: z.string(),
  //     })
  //   )
  //   .mutation(({ ctx, input }) => {
  //     return ctx.prisma.rating.create({
  //       data: {
  //         userRatingId: ctx.session.user.id,
  //         userRatedId: input.userRatedId,
  //         rating: input.rating,
  //       },
  //     });
  //   }),
  // editRating: protectedProcedure
  //   .input(
  //       z.object({
  //           rating: z.number(),
  //           userRatedId: z.string(),
  //       })
  //   )
  //   .mutation(({ ctx, input }) => {
  //       return ctx.prisma.rating.update({
  //           where: {
  //             userRatedId_userRatingId : { userRatedId: input.userRatedId, userRatingId: ctx.session.user.id },
  //           },
  //           data: {
  //             rating: input.rating,
  //           }
  //         });
  //       }),
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
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.rating.upsert({
        where: {
          userRatedId_userRatingId : { userRatedId: input.userRatedId, userRatingId: ctx.session.user.id },
        },
        update: {
          rating: input.rating,
        },
        create: {
          userRatingId: ctx.session.user.id,
          userRatedId: input.userRatedId,
          rating: input.rating,
        },
      });
    },
    ),
});
