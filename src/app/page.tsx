"use client";

import { Button } from "@/components/ui/button";
import { IKImage, IKUpload } from "imagekitio-next";
import { useState } from "react";

export default function Home() {
  const [filePath, setFilePath] = useState("");

  return (
    <div>
      {filePath && (
        <IKImage
          transformation={[{ raw: "l-text,i-Imagekit,fs-50,l-end" }]}
          path={filePath}
          width={400}
          height={400}
          alt="Alt text"
        />
      )}

      <div>
        <h2>File upload</h2>
        <Button variant="destructive">Upload</Button>
        <IKUpload
          fileName="test-upload.png"
          onError={(error) => {
            console.log(error, error.message);
          }}
          onSuccess={(response) => {
            console.log("success", response);
            setFilePath(response.filePath);
          }}
        />
      </div>
    </div>
  );
}
