import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const advertRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.advert.findMany();
  }),
  getManyByCategory: publicProcedure.input(
    z.object({
      categoryName: z.string(),
    })
  ).query(({ ctx, input }) => {
    return ctx.prisma.advert.findMany({
      where: {
        categoryName: input.categoryName,
      },
    });
  }),
  getOne: publicProcedure.input(
    z.object({
      id: z.string(),
    })
  ).query(({ ctx, input }) => {
    return ctx.prisma.advert.findUnique({
      where: {
        id: input.id,
      },
    });
  }),
  create: protectedProcedure.input(
    z.object({
      title: z.string(),
      description: z.string(),
      price: z.number(),
      subCategoryName: z.string(),
    })
  ).mutation(({ ctx, input } ) => {
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
