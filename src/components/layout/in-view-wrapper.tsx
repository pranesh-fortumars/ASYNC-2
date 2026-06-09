"use client";

import { useRef, ReactNode } from "react";
import { useInView } from "framer-motion";

export function InViewWrapper({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  // Trigger loading slightly before it enters the viewport to prevent pop-in
  const isInView = useInView(ref, { margin: "300px 0px 300px 0px" });

  return (
    <div ref={ref} className="w-full h-full relative">
      {isInView && children}
    </div>
  );
}
