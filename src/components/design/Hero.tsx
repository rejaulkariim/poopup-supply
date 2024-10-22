import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = async () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding">
      <MaxWidthWrapper>
        <div className="max-w-6xl mx-auto text-center">
          <div>
            <h1 className="tracking-tight text-balance font-extrabold !leading-tight text-foreground text-5xl md:text-6xl">
              Turn visitors into customers with popup{" "}
              <span className="bg-foreground text-background px-2">
                notifications
              </span>
            </h1>
            <p className="mt-6 text-base md:text-lg max-w-3xl mx-auto text-foreground">
              Deliver attention-grabbing pop-up notifications that present
              visitors with hard truths, driving stronger engagement and
              boosting conversions.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-x-6 my-6">
            <span className="flex gap-1.5 items-center">
              <Check className="h-5 w-5 shrink-0 text-green-600" />
              <p className="font-normal text-base md:text-lg">
                Pay once, use forever
              </p>
            </span>
            <span className="flex gap-1.5 items-center">
              <Check className="h-5 w-5 shrink-0 text-green-600" />
              <p className="font-normal text-base md:text-lg">
                1-minute no-code setup
              </p>
            </span>
            <span className="flex gap-1.5 items-center">
              <Check className="h-5 w-5 shrink-0 text-green-600" />
              <p className="font-normal text-base md:text-lg">
                Increase conversion rate
              </p>
            </span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="#pricing"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Get your popup
            </Link>
          </div>

          <div className="flex justify-center items-center gap-4 mt-10">
            <div className="flex -space-x-4">
              <Image
                height={100}
                width={100}
                className="inline-block h-10 w-10 rounded-full ring-2 ring-background"
                src="/assets/users/user-2.png"
                alt="user image"
                draggable={false}
              />
              <Image
                height={100}
                width={100}
                className="inline-block h-10 w-10 rounded-full ring-2 ring-background"
                src="/assets/users/user-3.png"
                alt="user image"
                draggable={false}
              />
              <Image
                height={100}
                width={100}
                className="inline-block h-10 w-10 rounded-full ring-2 ring-background"
                src="/assets/users/user-4.jpg"
                alt="user image"
                draggable={false}
              />
              <Image
                height={100}
                width={100}
                className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-background"
                src="/assets/users/user-5.jpg"
                alt="user image"
                draggable={false}
              />
            </div>

            <div className="flex flex-col justify-between">
              <div className="flex gap-0.5">
                <Star className="h-4 w-4 text-orange-600 fill-orange-600" />
                <Star className="h-4 w-4 text-orange-600 fill-orange-600" />
                <Star className="h-4 w-4 text-orange-600 fill-orange-600" />
                <Star className="h-4 w-4 text-orange-600 fill-orange-600" />
                <Star className="h-4 w-4 text-orange-600 fill-orange-600" />
              </div>

              <p>
                <span className="font-semibold">250</span> happy customers
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
