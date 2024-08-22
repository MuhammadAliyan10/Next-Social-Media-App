"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import PlaceHolder from "@tiptap/extension-placeholder";
import { submitPost } from "./actions";
import { useSession } from "@/app/(main)/SessionProvider";
import UserAvatar from "@/components/UserAvatar";
import { Button } from "@/components/ui/button";
import "./style.css";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function PostEditor() {
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useSession();
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bold: false,
        italic: false,
      }),
      PlaceHolder.configure({
        placeholder: "What's on your mind...",
      }),
    ],
  });
  const input =
    editor?.getText({
      blockSeparator: "\n",
    }) || "";

  async function onSubmit() {
    setLoading(true);
    await submitPost(input);
    editor?.commands.clearContent();
    setLoading(false);
  }

  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-card p-5 shadow-sm">
      <div className="flex gap-5">
        <UserAvatar avatarUrl={user?.avatarUrl} className="hidden sm:inline" />
        <EditorContent
          editor={editor}
          className="max-h-[20rem] w-full overflow-y-auto rounded-2xl bg-background px-5 py-3"
        />
      </div>
      <div className="flex justify-end">
        <Button
          onClick={onSubmit}
          disabled={!input.trim() || loading}
          className="min-w-20"
        >
          {loading ? (
            <div className="flex items-center justify-between">
              <p className="text-white">Posting</p>
              <Loader2 className="ms-1 size-4 animate-spin text-red-600" />
            </div>
          ) : (
            "Post"
          )}
        </Button>
      </div>
    </div>
  );
}
