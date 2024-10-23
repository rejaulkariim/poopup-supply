"use client";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className="section-padding bg-background">
      <MaxWidthWrapper>
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="tracking-tighter text-balance font-extrabold !leading-tight text-foreground text-3xl md:text-5xl">
            Give your visitors a reason to buy today,{" "}
            <span className="bg-foreground text-background px-2">
              not tomorrow
            </span>
          </h2>
          <p className="max-w-prose mx-auto text-foreground">
            All the resources invested in ads, SEO, and content marketing are
            wasted as potential customers leave without buying.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mt-10">
          <div className="w-1/2">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p className="font-bold text-xl" id="popup-header">
                    01 Create a PoopUp
                  </p>
                </AccordionTrigger>
                <AccordionContent
                  className="paragraph"
                  aria-labelledby="popup-header"
                >
                  Create PoopUp messages in 2 minutes, no code required. Write
                  about the #1 problem your visitors have. Trigger an emotional
                  response. Use icons people recognize.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger id="add-to-site-header">
                  <p className="font-bold text-xl" id="popup-header">
                    02 Add to your site
                  </p>
                </AccordionTrigger>
                <AccordionContent
                  className="paragraph"
                  aria-labelledby="add-to-site-header"
                >
                  Copy and paste a small code snippet into your website. It
                  works with any website, including WordPress, Shopify, Wix,
                  Squarespace, and more.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger id="get-customers-header">
                  <p className="font-bold text-xl" id="popup-header">
                    03 Get more customers 🤑
                  </p>
                </AccordionTrigger>
                <AccordionContent
                  className="paragraph"
                  aria-labelledby="get-customers-header"
                >
                  PoopUp delivers effective pop-up messages to remind your
                  visitors of their pain points and drive them to take action.
                  Watch your conversion rate skyrocket 🚀
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end bg-foreground">
            <Image
              height={500}
              width={500}
              className="object-cover"
              src="/assets/hero-image.png"
              alt="An illustrative hero image demonstrating the product features."
              priority // Optional: to load the image sooner
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HowItWorks;
