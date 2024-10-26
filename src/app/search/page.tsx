import { unstable_noStore } from "next/cache";
import { UploadMemeButton } from "./upload-meme-button";
import ResultsList from "./result-list";
import { imagekit } from "../lib/image-kit";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  unstable_noStore();
  const files = await imagekit.listFiles({
    tags: searchParams.q,
  });
  console.log(files);
  return (
    <div className="container mx-auto space-y-8 py-8 px-4">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl text-bold"> Search Results</h1>
        <UploadMemeButton />
      </div>
      <ResultsList files={files} />
    </div>
  );
}
