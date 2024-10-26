"use client";
import { urlEndpoint } from "@/app/providers";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { FileObject } from "imagekit/dist/libs/interfaces";
import { IKImage } from "imagekitio-next";
import { useState } from "react";

export default function CustomizePanel({
  file,
}: {
  file: Pick<FileObject, "filePath" | "name">;
}) {
  const [textOverlay1, setTextOverlay1] = useState("");
  const transformation = [];
  if (textOverlay1) {
    transformation.push({
      raw: `l-text:${textOverlay1},i-Imagekit,fs-50,l-end`,
    });
  }
  return (
    <div className="grid grid-cols-2">
      <form>
        <Label htmlFor="textOverlay1"> Text Overlay 1</Label>
        <Input
          id="textOverlay1"
          value={textOverlay1}
          onChange={(e) => setTextOverlay1(e.target.value)}
        />
      </form>
      <IKImage
        urlEndpoint={urlEndpoint}
        path={file.filePath}
        width={400}
        height={400}
        transformation={transformation}
        alt="Alt text"
      />
    </div>
  );
}
