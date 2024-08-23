"use client";

import InfiniteScrollContainer from "@/components/InfiniteScrollContainer";
import DeletePostDialog from "@/components/posts/DeletePostDialog";
import Post from "@/components/posts/Post";
import PostsLoadingSkeleton from "@/components/posts/PostsLoadingSkeleton";
import { Button } from "@/components/ui/button";
import kyInstance from "@/lib/Ky";
import { PostData, PostsPage } from "@/lib/types";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

export default function ForYouFeed() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["post-feed", "for-you"],
    queryFn: ({ pageParam }) =>
      kyInstance
        .get(
          "/api/posts/for-you",
          pageParam ? { searchParams: { cursor: pageParam } } : {},
        )
        .json<PostsPage>(),
    initialPageParam: null as string | null,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  const posts = data?.pages.flatMap((page) => page.posts) || [];
  if (status === "pending") {
    return <PostsLoadingSkeleton />;
  }
  if (status == "success" && !posts.length && !hasNextPage) {
    return (
      <p className="my-4 text-center text-muted-foreground">
        No Posts. Follow others to get more.
      </p>
    );
  }
  if (status === "error") {
    return <p className="text-center text-destructive">An error occur</p>;
  }
  return (
    <InfiniteScrollContainer
      className="space-y-5"
      onBottomReached={() => hasNextPage && !isFetching && fetchNextPage()}
    >
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
      {/* Fetch using button */}
      {/* {isFetchingNextPage ? (
        <Loader2 className="mx-auto my-2 animate-spin" />
      ) : (
        <>
          {hasNextPage ? (
            <Button onClick={() => fetchNextPage()} disabled={isFetching}>
              Load More
            </Button>
          ) : (
            <p className="my-4 text-center text-muted-foreground">
              You all caught up. Follow others to get more
            </p>
          )}
        </>
      )} */}
      {isFetchingNextPage && <Loader2 className="mx-auto my-3 animate-spin" />}
      {!hasNextPage && (
        <p className="my-4 text-center text-muted-foreground">
          You all caught up. Follow others to get more.
        </p>
      )}
    </InfiniteScrollContainer>
  );
}
