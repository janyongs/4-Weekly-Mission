import { ReactChildren, ReactNode } from "react";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  console.log("react", children);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export const getMainLayout = (children: ReactNode) => {
  return <MainLayout>{children}</MainLayout>;
};
