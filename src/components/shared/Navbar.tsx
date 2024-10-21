import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import Logo from "./Logo";
import MaxWidthWrapper from "./MaxWidthWrapper";
import MobileNav from "./MobileNav";
import NavItems from "./Navitems";

const Navbar = () => {
  return (
    <header className="h-16 border-b fixed inset-0 inset-x-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <MaxWidthWrapper>
        <nav className="h-full flex justify-between items-center">
          <Logo />

          <div className="hidden md:flex items-center gap-10">
            <NavItems />

            <Link href="/" className={cn(buttonVariants({ size: "lg" }))}>
              Get started
            </Link>
          </div>

          <MobileNav />
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
