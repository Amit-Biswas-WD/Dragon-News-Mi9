import Header from "../components/Header/Header";
import LayoutComponents from "../components/layout-components/Layout-Components";
import Navbar from "../components/Navbar/Navbar";
import LatestLayout from "./LatestLayout";
import RightNav from "./RightNav";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header />
        <section className="w-[1140px] mx-auto">
          <LatestLayout />
        </section>
      </header>
      <nav className="w-[1140px] mx-auto">
        <Navbar />
      </nav>
      <main className="max-w-[1140px] mx-auto my-8 text-center grid grid-cols-1 gap-8 md:grid-cols-12">
        <aside className="col-span-12 md:col-span-3"> <LayoutComponents/> </aside>
        <section className="col-span-12 md:col-span-6">Middle Corner</section>
        <aside className="col-span-12 md:col-span-3"> <RightNav/> </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
