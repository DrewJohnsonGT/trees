import { z } from 'zod';
import { type Node } from '~/app/types';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

const treeData: Node = {
  id: 'root',
  text: 'Root Node',
  children: [
    { id: 'node1', text: 'Child 1' },
    {
      id: 'node2',
      text: 'Child 2',
      children: [
        {
          id: 'node3',
          text: 'Grandchild 1',
          children: [
            {
              id: 'node4',
              text: 'Great Grandchild 1',
            },
          ],
        },
      ],
    },
  ],
};

export const nodeRouter = createTRPCRouter({
  getAll: publicProcedure.query(() => {
    return treeData;
  }),
});
