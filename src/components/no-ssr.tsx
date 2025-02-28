"use client";

import { type ReactNode, useEffect, useState } from "react";

interface NoSSRProps {
  children: ReactNode;
}

export function NoSSR({ children }: NoSSRProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
}
