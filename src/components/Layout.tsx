import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  cartItemsCount?: number;
}

const Layout = ({ children, cartItemsCount = 0 }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartItemsCount={cartItemsCount} />
      <main className="flex-1 page-enter">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;