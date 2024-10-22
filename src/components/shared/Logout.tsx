"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { logout } from "@/server/actions/auth.action";

const Logout = () => {
  return (
    <button
      onClick={() => logout()}
      className={cn(buttonVariants({ size: "sm", className: "w-full" }))}
    >
      Logout
    </button>
  );
};

export default Logout;
