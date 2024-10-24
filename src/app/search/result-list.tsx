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

export default function ResultList({ files }: { files: FileObject[] }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {files.map((file) => {
        if (!file.filePath) return null;
        return (
          <Card key={file.fileId}>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
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
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
