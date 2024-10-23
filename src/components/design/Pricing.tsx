import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Check } from "lucide-react";
import Link from "next/link";

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding">
      <MaxWidthWrapper>
        <div className="max-w-4xl mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2 className="tracking-tighter text-balance font-extrabold !leading-tight text-foreground text-3xl md:text-5xl">
              Make your product a no-brainer purchase
            </h2>
          </div>
        </div>

        <div className="max-w-md mx-auto rounded-2xl border-2 border-primary shadow-sm overflow-hidden">
          <div className="bg-[#FBF2E4] p-10">
            <div className="mt-4 flex items-center gap-4">
              <span className="text-5xl font-extrabold">$29</span>
              <span className="text-xl line-through">$49</span>
            </div>
            <ul className="mt-8 space-y-2">
              <li className="flex gap-1.5 items-center">
                <Check className="h-5 w-5 shrink-0 text-green-600" />
                <span>Lifetime Access</span>
              </li>
              <li className="flex gap-1.5 items-center">
                <Check className="h-5 w-5 shrink-0 text-green-600" />
                <span>Unlimited PoopUps</span>
              </li>
              <li className="flex gap-1.5 items-center">
                <Check className="h-5 w-5 shrink-0 text-green-600" />
                <span>Unlimited websites</span>
              </li>
              <li className="flex gap-1.5 items-center">
                <Check className="h-5 w-5 shrink-0 text-green-600" />
                <span>Simple analytics</span>
              </li>

              <li className="flex gap-1.5 items-center">
                <Check className="h-5 w-5 shrink-0 text-green-600" />
                <span>Live chat support</span>
              </li>
            </ul>

            <div className="space-y-2 mt-6">
              <Link
                href="#pricing"
                className={cn(
                  buttonVariants({
                    size: "lg",
                    className: "button w-full",
                  })
                )}
              >
                Get your poopup &rarr;
              </Link>

              <p className="text-sm text-center">Pay once. Access forever.</p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Pricing;
