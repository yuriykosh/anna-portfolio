import { portfolioList } from "@/utils/data";
import PortfolioList from "@/components/category/PortfolioList";
import GoBackButton from "@/components/assets/GoBackButton";
import Preloader from "../assets/Preloader";

interface CategoryPageProps {
  category: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category }) => {
  return (
    <>
      <Preloader />
      <main className="w-full min-h-[100svh] h-[100svh] max-h-[100svh] pt-[11rem] sm:pt-52 overflow-auto scroll-smooth">
        <section className="py-8 px-6">
          <div className="flex items-center gap-8 my-4 ">
            <GoBackButton />
            <h1 className="text-2xl font-semibold">{category}</h1>
          </div>

          <PortfolioList list={portfolioList} category={category} />
        </section>
      </main>
    </>
  );
};
export default CategoryPage;
