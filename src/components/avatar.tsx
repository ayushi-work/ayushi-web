"use client";

import Image from "next/image";
import { useState } from "react";

// hero portrait. drop a square photo at public/me.jpg to replace the monogram.
export function Avatar() {
  const [missing, setMissing] = useState(false);
  return (
    <div className="relative mb-5 h-20 w-20" data-cursor="that's me">
      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-lg font-bold text-[var(--accent)]">
        ay
      </div>
      {!missing && (
        <Image
          src="/me.jpg"
          alt="ayushi yadav"
          fill
          sizes="80px"
          className="rounded-full border border-[var(--border)] object-cover"
          onError={() => setMissing(true)}
        />
      )}
      <span className="absolute bottom-0.5 right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[var(--background)] bg-blue-500" />
    </div>
  );
}
