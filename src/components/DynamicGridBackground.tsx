import React from 'react';

/**
 * DynamicGridBackground
 * SVG grid background that adapts to light/dark theme using Tailwind classes.
 * Place as a fixed/absolute element behind all content.
 */
export default function DynamicGridBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 w-full h-full"
    >
      <svg
        className="w-full h-full"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 32 0 L 0 0 0 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-blue-500/10 dark:text-blue-200/10"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      {/* Optional: subtle blur/gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-blue-600/5 to-blue-800/5 dark:from-blue-900/10 dark:via-blue-800/10 dark:to-blue-700/10 backdrop-blur-[2px]" />
    </div>
  );
}
