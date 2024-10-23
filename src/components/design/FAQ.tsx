import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <div className="max-w-4xl mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2 className="tracking-tighter text-balance font-extrabold !leading-tight text-foreground text-3xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-prose mx-auto text-background">
              All the resources invested in ads, SEO, and content marketing are
              wasted as potential customers leave without buying.
            </p>
          </div>
        </div>
        <div className="max-w-screen-sm mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it a subscription?</AccordionTrigger>
              <AccordionContent className="paragraph">
                Nope. You pay once and it&apos;s yours forever.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it compatible with?</AccordionTrigger>
              <AccordionContent className="paragraph">
                Wordpress, Shopify, Carrd, Webflow, Bubble, Wix, etc. are all
                supported. If you can add a code snippet (script) to your
                website, you can use PoopUp.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Do I need to code?</AccordionTrigger>
              <AccordionContent className="paragraph">
                You don't. All you need to do is copy and paste a small code
                snippet in your website's tag. Wordpress, Shopify, Webflow,
                Bubble, Wix, etc. are all supported.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Does PoopUp work on mobile?</AccordionTrigger>
              <AccordionContent className="paragraph">
                Yes! Only one PoopUp will be displayed at a time to avoid
                cluttering your visitor's screen.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>What can I customize?</AccordionTrigger>
              <AccordionContent className="paragraph">
                For now you can customize the following: PoopUp title PoopUp
                body PoopUp Icon When are PoopUps firing How often are PoopUps
                firing How long are PoopUps displayed
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default FAQ;
