import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { ReactNode } from "react";

const HomeLayoutPage = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 -mt-[-4rem]">{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayoutPage;
