import { Tree } from '~/app/components/Tree';
import { api } from '~/trpc/server';

export default async function Home() {
  const { treeData } = await api.post.getAll();

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#441d7a] to-[#15162c] text-white">
      <Tree treeData={treeData} />
    </main>
  );
}
