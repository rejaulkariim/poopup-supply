import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `w-full h-full max-w-screen-2xl px-4 md:px-28 ${className}`
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
