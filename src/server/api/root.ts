import { nodeRouter } from '~/server/api/routers/post';
import { createCallerFactory, createTRPCRouter } from '~/server/api/trpc';

export const appRouter = createTRPCRouter({
  post: nodeRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
