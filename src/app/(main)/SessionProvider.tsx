"use client";
import { User } from "lucia";
import React, { createContext, useContext } from "react";
import Navbar from "./Navbar";

interface SessionContext {
  user: User | null;
  session: {
    id: string;
    expiresAt: Date;
    fresh: boolean;
    userId: string;
  } | null;
}
export function useSession() {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("Session provider is required.");
  }
  return context;
}

const SessionContext = createContext<SessionContext | null>(null);

export default function SessionProvider({
  children,
  value,
}: React.PropsWithChildren<{ value: SessionContext }>) {
  return (
    <SessionContext.Provider value={value}>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="mx-auto max-w-7xl p-5">{children}</div>
      </div>
    </SessionContext.Provider>
  );
}
