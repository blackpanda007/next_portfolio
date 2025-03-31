import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex rounded-md border border-white/40 focus:border-green-500 hover:border-green-300 font-light bg-black/40 px-4 py-3 text-base placeholder:text-white/60 outline-none",
        className
      )}
      {...props}
    />
  );
}

export { Input };
