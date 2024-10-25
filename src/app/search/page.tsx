import ImageKit from "imagekit";
import { unstable_noStore } from "next/cache";
import ResultList from "./result-list";
import { Button } from "@/components/ui/button";
import { UploadMemeButton } from "./upload-meme-button";

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
  privateKey: process.env.PRIVATE_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
});

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  unstable_noStore();
  const params = await searchParams;
  const files = await imagekit.listFiles({
    searchQuery: `name:${params.q}`,
  });
  return (
    <div className="container mx-auto space-y-8 py-8 px-4">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl text-bold"> Search Results</h1>

        <UploadMemeButton />
      </div>
      <ResultList files={files} />
    </div>
  );
}
