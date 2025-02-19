import DashboardSidebarNav from "@/components/shared/DashboardSidebarNav";
import { dashboardConfig } from "@/config/dashboard";
import { ReactNode } from "react";

const DashboardLayoutPage = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="sm:grid grid-cols-12">
        <div className="col-span-2">
          <div className="hidden sm:block col-span-1 min-h-screen border-r h-full">
            <div className="sticky top-0">
              <DashboardSidebarNav items={dashboardConfig.sidebarNav} />
            </div>
          </div>
        </div>

        <div className="sm:col-span-10">
          <header className="w-full flex justify-between items-center border-b h-14 px-4 sm:px-6">
            <div className="hidden sm:flex justify-end w-full">
              {/* <SignedIn>
                <div className="">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn> */}
            </div>

            {/* <MobileNav /> */}
          </header>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayoutPage;
