"use client";

import { FileObject } from "imagekit/dist/libs/interfaces";
import { IKImage } from "imagekitio-next";
import { urlEndpoint } from "../providers";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ResultList({ files }: { files: FileObject[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {files.map((file) => {
        return (
          <Card key={file.fileId}>
            <CardHeader>
              <CardTitle>
                {file.customMetadata?.displayName ?? file.name}
              </CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <IKImage
                urlEndpoint={urlEndpoint}
                path={file.filePath}
                width={400}
                height={400}
                alt="Alt text"
              />
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/customize/${file.fileId}`}>Customize</Link>
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
