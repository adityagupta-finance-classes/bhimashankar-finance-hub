import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
  hideFooter?: boolean;
}

const Layout = ({ children, hideFooter }: LayoutProps) => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1 pt-16">{children}</main>
    {!hideFooter && <Footer />}
  </div>
);

export default Layout;
