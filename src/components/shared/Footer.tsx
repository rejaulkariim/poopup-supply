import { footerLegalLinks, footerResourcesLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="border-t pt-10">
      <MaxWidthWrapper>
        <div className="lg:py-20 flex flex-wrap gap-8 lg:justify-between lg:gap-0">
          {/* First Section */}
          <div className="w-full lg:w-1/3">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-bold">Poopup Supply</span>
            </Link>

            <div className="mt-4 space-y-2">
              <Image
                src="/assets/rejaul.png"
                height={100}
                width={100}
                alt="rejaul karim"
                className="h-10 w-10 rounded-full"
              />
              <p className="text-sm">
                Hi There👋 I&apos;m{" "}
                <span className="font-semibold">Rejaul Karim</span>, the creator
                of PoopUp. You can follow my work on{" "}
                <Link
                  href="https://x.com/rejaulkariim"
                  target="_blank"
                  className="underline font-semibold"
                >
                  Twitter
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Resources, Company, and Legal Sections */}
          <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between lg:w-2/3 xl:w-7/12">
            {/* Resources */}
            <div>
              <h4 className="mb-4 font-bold uppercase text-foreground">
                Links
              </h4>
              <ul>
                {footerResourcesLinks.map((item) => (
                  <li key={item.label} className="mb-3">
                    <Link
                      href={item.route}
                      className="text-sm text-foreground/90 hover:text-foreground transition-all"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Company */}
            <div>
              <h4 className="mb-4 font-bold uppercase text-foreground">
                Legal
              </h4>
              <ul>
                {footerLegalLinks.map((item) => (
                  <li key={item.label} className="mb-3">
                    <Link
                      href={item.route}
                      className="text-sm text-foreground/90 hover:text-foreground transition-all"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Legal */}
            <div>
              <h4 className="mb-4 font-bold uppercase text-foreground">More</h4>
              <ul>
                {footerLegalLinks.map((item) => (
                  <li key={item.label} className="mb-3">
                    <Link
                      href={item.route}
                      className="text-sm text-foreground/90 hover:text-foreground transition-all"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col gap-3 md:flex-row md:justify-between items-center my-6">
          <p className="text-sm text-foreground/80">
            &copy; {new Date().getFullYear()} Poopup Supply. All rights reserved
          </p>

          <ul className="flex items-center gap-3">
            <li className="p-2 rounded-full bg-[#FCF3E4]">
              <Link href="https://x.com/poopupsupply" aria-label="twitter icon">
                <FaXTwitter />
              </Link>
            </li>
          </ul>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
