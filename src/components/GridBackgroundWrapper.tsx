"use client";
import { useTheme } from "next-themes";
import { ReactNode, useEffect, useState } from "react";

export default function GridBackgroundWrapper({ children }: { children: ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const isDark = resolvedTheme === "dark";
  return (
    <div
      className={`min-h-screen w-full relative transition-colors duration-500 ${
        isDark
          ? "bg-gray-900 bg-grid-dark text-white"
          : "bg-white bg-grid-light text-gray-900"
      }`}
    >
      {/* Optional: blue glass gradient overlay */}
      <div className="fixed inset-0 -z-10 bg-blue-glass-gradient opacity-30 pointer-events-none" />
      {children}
    </div>
  );
}
