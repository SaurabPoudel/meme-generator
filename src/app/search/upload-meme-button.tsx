"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IKUpload } from "imagekitio-next";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export function UploadMemeButton() {
  const uploadInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button> Upload Base Meme</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload Your Meme Image</DialogTitle>
          <DialogDescription>
            This is a meme image that everyone on the site can use.
          </DialogDescription>
        </DialogHeader>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            const displayName = formData.get("displayName") as string;
            uploadInputRef.current?.click();
          }}
        >
          <div>
            <Label htmlFor="displayName">Display Name</Label>
            <Input name="displayName" placeholder="Display Name" required />
            <IKUpload
              fileName="test-upload.png"
              onError={(error) => {
                console.log(error, error.message);
              }}
              onSuccess={(response) => {
                router.push(`/customize/${response.fileId}`);
              }}
              style={{ display: "none" }}
              ref={uploadInputRef}
            />
          </div>
          <DialogFooter className=" flex justify-end">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
            <Button type="submit">Select & Upload Image</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
