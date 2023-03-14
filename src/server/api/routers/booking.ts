import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";

export const bookingRouter = createTRPCRouter({
  create: protectedProcedure.input(
    z.object({
      advertId: z.string(),
      date: z.date(),
    })
  ).mutation(({ ctx, input } ) => {
      return ctx.prisma.booking.create({
        data: {
          advertId: input.advertId,
          date: input.date,
          userId: ctx.session.user.id,
        }
      });
}),
  getBookedDates: protectedProcedure.input(
    z.object({
      advertId: z.string(),
    })
  ).query(({ ctx, input }) => {
    return ctx.prisma.booking.findMany({
      where: {
        advertId: input.advertId,
      },
      select: {
        date: true,
      }
    });
  }
  ),
});
