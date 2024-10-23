import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <div className="text-center space-y-4 border py-20 rounded-2xl relative max-w-4xl bg-[#FCF3E4] mx-auto">
          {/* Gradient color */}
          <div className="footer-gradient z-0" />
          <h2 className="tracking-tight text-balance font-extrabold !leading-tight text-foreground text-3xl md:text-5xl">
            Get more customers today
          </h2>
          <p className="max-w-xl mx-auto text-foreground">
            Don&apos;t let your visitors leave without taking action.
          </p>
          <Link
            href="#pricing"
            className={cn(
              buttonVariants({ size: "lg", className: "text-foreground" })
            )}
          >
            Get your poopup &rarr;
          </Link>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default CTA;
