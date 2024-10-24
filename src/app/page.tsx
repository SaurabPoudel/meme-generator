"use client";

import { Button } from "@/components/ui/button";
import { IKImage, IKUpload, ImageKitProvider } from "imagekitio-next";
import { useState } from "react";

export default function Home() {
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
  const authenticator = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth");

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Request failed with status ${response.status}: ${errorText}`
        );
      }

      const data = await response.json();
      const { signature, expire, token } = data;
      return { signature, expire, token };
    } catch (err) {
      const error = err as Error;
      throw new Error(`Authentication request failed: ${error.message}`);
    }
  };
  const [filePath, setFilePath] = useState("");

  return (
    <div>
      <ImageKitProvider
        publicKey={publicKey}
        urlEndpoint={urlEndpoint}
        authenticator={authenticator}
      >
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
      </ImageKitProvider>
    </div>
  );
}
