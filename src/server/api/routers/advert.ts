import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const advertRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.advert.findMany();
  }),
  create: protectedProcedure.input(
    z.object({
      title: z.string(),
      description: z.string(),
      price: z.number(),
    })
  ).mutation(({ ctx, input } ) => {
    return ctx.prisma.advert.create({
      data: {
        title: input.title,
        description: input.description,
        price: input.price,
        authorId: ctx.session.user.id,
      },
    });
  }),
});
