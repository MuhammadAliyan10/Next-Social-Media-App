"use clients";
import { PostData } from "@/lib/types";
import Link from "next/link";
import UserAvatar from "../UserAvatar";
import formatDateToRelative from "@/lib/utils";
import { useSession } from "@/app/(main)/SessionProvider";
import PostDetails from "./PostDetails";

interface PostProps {
  post: PostData;
}
export default function Post({ post }: PostProps) {
  const { user } = useSession();
  return (
    <article className="group/post space-y-3 rounded-2xl bg-card p-5 shadow-sm">
      <div className="flex justify-between gap-4">
        <div className="flex flex-wrap gap-3">
          <Link href={`/user/${post.user.username}`}>
            <UserAvatar avatarUrl={post.user.avatarUrl} />
          </Link>

          <div>
            <Link
              href={`/user/${post.user.username}`}
              className="block font-medium hover:underline"
            >
              {post.user.username}
            </Link>
            <Link
              href={`/posts/${post.id}`}
              className="block text-sm text-muted-foreground hover:underline"
            >
              {formatDateToRelative(post.createdAt)}
            </Link>
          </div>
        </div>
        {post.userId === user?.id && (
          <PostDetails
            post={post}
            className="opacity-0 transition-opacity group-hover/post:opacity-100"
          />
        )}
      </div>
      <div className="whitespace-pre-line break-words">{post.content}</div>
    </article>
  );
}
