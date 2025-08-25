import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";

type Props = {
  children: React.ReactNode;
  headerButtons: string[];
  deleteHero?: boolean;
};

const Layout = ({ children, headerButtons, deleteHero = false }: Props) => {
  return (
    <div className="flex flex-col min-h-screen font-rounded w-full scroll-smooth">
      <Header buttons={headerButtons} />
      {!deleteHero && <Hero />}
      <div className="bg-orange-200">
        <div className="rounded-tl-full container mx-auto flex-1 py-10">
          {children}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
