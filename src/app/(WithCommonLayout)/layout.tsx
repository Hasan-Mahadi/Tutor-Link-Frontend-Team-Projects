import { Footer } from "@/components/shared/Footer";
import Navigation from "@/components/shared/UpdatedNav";
import React, { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container mx-auto">
      <Navigation></Navigation>
      <div className="min-h-screen">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default CommonLayout;
