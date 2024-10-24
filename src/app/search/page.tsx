import ImageKit from "imagekit";
import { unstable_noStore } from "next/cache";
import ResultList from "./result-list";

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
  privateKey: process.env.PRIVATE_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
});

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const params = await searchParams;
  unstable_noStore();
  const files = await imagekit.listFiles({
    searchQuery: `name:${params.q}`,
  });
  return (
    <div className="container mx-auto space-y-8 py-8">
      <h1 className="text-4xl text-bold"> Search Results</h1>
      <ResultList files={files} />
    </div>
  );
}
