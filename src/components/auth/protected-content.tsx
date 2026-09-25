"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { isAuthenticated } from "@/lib/auth";

export function ProtectedContent({ children, fallback }: { children: React.ReactNode; fallback?: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setAuthenticated(isAuthenticated());
    setReady(true);
  }, []);

  if (!ready) return null;
  if (!authenticated) {
    return fallback ?? (
      <div className="container-shell py-20 text-center">
        <p className="eyebrow">Restricted access</p>
        <h1 className="mt-4 text-4xl font-semibold">Please sign in to continue.</h1>
        <p className="mt-4 text-navy/60">This inventory workspace is reserved for authorized team members.</p>
        <Link href="/auth/login" className="mt-6 inline-flex rounded-sm bg-burgundy px-5 py-3 font-semibold text-white transition hover:bg-burgundy/90">Sign in</Link>
      </div>
    );
  }

  return <>{children}</>;
}
