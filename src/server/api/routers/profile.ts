import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const profileRouter = createTRPCRouter({
    getUser: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.user.findUnique(
            {where: {id: ctx.session.user.id}}
        );
      }),
    create: protectedProcedure.input(
        z.object({
            phone: z.string(),
            address: z.string(),
            city: z.string(),
        })
    ).mutation(({ ctx, input }) => {
        return ctx.prisma.user.update({
            where: {id: ctx.session.user.id},
            data: {
                phone: input.phone,
                address: input.address,
                city: input.city,
     },
      });
    }),
    
  });

  



