import { contextProps } from "@trpc/react-query/shared";
import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const advertRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.advert.findMany();
  }),
  getOne: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.advert.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
  avability: protectedProcedure
    .input(
      z.object({
        advertId: z.string(),
        available: z.boolean(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.advert.update({
        where: { id: input.advertId },
        data: { availability: input.available },
      });
    }),
  create: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        price: z.number(),
        subCategoryName: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.advert.create({
        data: {
          title: input.title,
          description: input.description,
          price: input.price,
          authorId: ctx.session.user.id,
          subCategoryName: input.subCategoryName,
        },
      });
    }),
});
