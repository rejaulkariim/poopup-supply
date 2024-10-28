import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const WebsitePage = () => {
  const websites = [
    {
      name: "Shooww",
      slug: "shooww",
      url: "https://shooww.com",
    },
    {
      name: "Appbrews",
      slug: "appbrews",
      url: "https://appbrews.co",
    },
    {
      name: "Notify",
      slug: "notify",
      url: "https://shooww.com",
    },
  ];
  return (
    <main className="py-10">
      <MaxWidthWrapper>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold text-xl">Websites</h3>
          </div>
          <div>
            <Link
              href="/user/dashboard/website/create"
              className={cn(buttonVariants())}
            >
              New Website
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          {websites.map((website) => (
            <Link
              href={`/user/dashboard/website/${website.slug}`}
              key={website.name}
              className="border p-6 rounded-2xl bg-card"
            >
              <p>{website.name}</p>
            </Link>
          ))}
        </div>
      </MaxWidthWrapper>
    </main>
  );
};

export default WebsitePage;
