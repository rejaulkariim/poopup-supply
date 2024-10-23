import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";

const Feature = () => {
  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="tracking-tight text-balance font-extrabold !leading-tight text-foreground text-3xl md:text-5xl">
            97% of visitors aren&apos;t ready to purchase.
          </h2>
          <p className="max-w-prose mx-auto paragraph">
            All the resources invested in ads, SEO, and content marketing are
            wasted as potential customers leave without buying.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-20 max-w-3xl mx-auto">
          <div className="text-center">
            <span className="text-4xl">😉</span>
            <p className="paragraph">
              Potential customers are <br /> interested
            </p>
          </div>
          <div className="text-center">
            <span className="text-4xl">😐</span>
            <p className="paragraph">
              They don&apos;t find a reason <br /> to buy right now
            </p>
          </div>
          <div className="text-center">
            <span className="text-4xl">😶</span>
            <p className="paragraph">
              They leave and never <br /> come back
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Feature;
