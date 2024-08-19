import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";
import SessionProvider from "./SessionProvider";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, session } = await validateRequest();
  if (
    !session ||
    !session.id ||
    !session.expiresAt ||
    !session.fresh ||
    !session.userId
  ) {
    redirect("/login");
  }

  return (
    <SessionProvider
      value={{
        user: user ?? null,
        session: session,
      }}
    >
      {children}
    </SessionProvider>
  );
}
