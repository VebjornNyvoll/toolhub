import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";

export const favoriteRouter = createTRPCRouter({
    favoriteAd: protectedProcedure.input(
        z.object({
          advertId: z.string(),
        })
      ).mutation(({ ctx, input } ) => {
        const favorited = ctx.prisma.favorited.findMany({
          where: {
            advertId: input.advertId,
            userId: ctx.session.user.id,
          },
          select: {
            id: true,
          }
        }).then((res) => {
          if (res.length > 0) {
            throw new TRPCError({
              code: 'BAD_REQUEST',
              message: 'Advert already favorited',
            });
          }
          else {
            return ctx.prisma.favorited.create({
              data: {
                advertId: input.advertId,
                userId: ctx.session.user.id,
              }
            });
          }
        })
    }),
    unfavoriteAd: protectedProcedure.input(
        z.object({
          advertId: z.string(),
        })
      ).mutation(({ ctx, input } ) => {
          return ctx.prisma.favorited.deleteMany({
            where: {
              advertId: input.advertId,
              userId: ctx.session.user.id,
            }
          })
    }),
    getFavoritedAdsIds: protectedProcedure.query(({ ctx } ) => {
        return ctx.prisma.favorited.findMany({
          where: {
            userId: ctx.session.user.id,
          },
          select: {
            advertId: true,
          }
        });
      }),
    getFavoritedAd: protectedProcedure.input(
        z.object({
          advertId: z.string(),
        })).query(({ ctx, input } ) => {
            return ctx.prisma.favorited.findMany({
              where: {
                advertId: input.advertId, 
                userId: ctx.session.user.id,
              },
              select: {
                userId: true,
              }
            });
    }),
});