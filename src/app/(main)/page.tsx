import TrendsSidebar from "@/components/TrendsSidebar";
import Post from "@/components/posts/Post";
import PostEditor from "@/components/posts/editor/PostEditor";
import prisma from "@/lib/prisma";
import React from "react";
import ForYouFeed from "./ForYouFeed";

export default function Home() {
  return (
    <div className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">
        <PostEditor />
        <ForYouFeed />
      </div>
      <TrendsSidebar />
    </div>
  );
}
