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
  ).query(({ ctx }) => {
    return ctx.prisma.booking.findMany({
      where: {
        OR: [
          {
            userId: ctx.session.user.id,
          },
          {
            advert: {
              authorId: ctx.session.user.id,
            }
          },
        ]
      },
      select: {
        advertId: true,
        userId: true,
        user: true,
        date: true,
        advert: {
          select: {
            authorId: true,
            title: true,
            subCategoryName: true,
          }
        }
      }
    });
  }
  ),
  getYourBookings: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.booking.findMany({
      where: {
        OR: [
          {
            userId: ctx.session.user.id,
          },
          {
            advert: {
              authorId: ctx.session.user.id,
            }
          },
        ]
      },
      select: {
        advertId: true,
        userId: true,
        user: true,
        date: true,
        advert: {
          select: {
            authorId: true,
            author: true,
            title: true,
            subCategoryName: true,
          }
        }
      }
    });
  }),
});
