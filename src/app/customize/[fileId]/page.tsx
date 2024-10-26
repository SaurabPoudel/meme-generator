import { imagekit } from "@/app/lib/image-kit";
import { UploadMemeButton } from "@/app/search/upload-meme-button";
import { unstable_noStore } from "next/cache";
import CustomizePanel from "./customize-panel";

export default async function SearchPage({
  params,
}: {
  params: { fileId: string };
}) {
  unstable_noStore();
  const file = await imagekit.getFileDetails(params.fileId);

  console.log(file);
  return (
    <div className="container mx-auto space-y-8 py-8 px-4">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl text-bold"> Customize</h1>
        <UploadMemeButton />
      </div>
      {/* <ResultsList files={files} /> */}
      <CustomizePanel
        file={{
          filePath: file.filePath,
          name: file.name,
        }}
      />
    </div>
  );
}
