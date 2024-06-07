'use client';

import { Tree } from '~/app/components/Tree';
import { api } from '~/trpc/react';

export default function Home() {
  const { data, isLoading } = api.node.getAll.useQuery();

  return (
    <main>
      {isLoading && 'Loading...'}
      {data && <Tree treeData={data} />}
    </main>
  );
}
