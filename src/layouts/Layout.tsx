import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen font-rounded w-full ">
      <Header />
      <Hero />
      <div className="bg-orange-200">
        <div className="container mx-auto flex-1 py-10 ">{children}</div>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
