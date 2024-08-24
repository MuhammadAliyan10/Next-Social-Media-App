"use client";
import useFollowerInfo from "@/hooks/useFollowerInfo";
import { FollowerInfo } from "@/lib/types";
import { useToast } from "./ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "./ui/button";
import kyInstance from "@/lib/Ky";

interface FollowButtonProps {
  userId: string;
  initialState: FollowerInfo;
}
export default function FollowButton({
  userId,
  initialState,
}: FollowButtonProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { data } = useFollowerInfo(userId, initialState);

  const mutation = useMutation({
    mutationFn: () =>
      data.isFollowedByUserId
        ? kyInstance.delete(`/api/users/${userId}/followers`)
        : kyInstance.post(`/api/users/${userId}/followers`),
  });

  return (
    <Button
      variant={data.isFollowedByUserId ? "secondary" : "default"}
      onClick={() => mutation.mutate()}
    >
      {data.isFollowedByUserId ? "Following" : "Follow"}
    </Button>
  );
}
