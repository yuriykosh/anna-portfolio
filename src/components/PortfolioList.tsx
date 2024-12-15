import PortfolioItem from "./PortfolioItem";

interface Project {
  name: string;
  cover: string;
  url: string;
}

interface PortfolioListProps {
  list: { category: string; projects: Project[] }[];
  category?: string;
}

const PortfolioList: React.FC<PortfolioListProps> = ({ list, category }) => {
  const filteredProjects = category
    ? list
        .filter((item) => item.category === category)
        .flatMap((item) => item.projects)
    : list.flatMap((item) => item.projects);

  return (
    <ul className="w-full h-full grid grid-cols-1 gap-2 py-4 sm:grid-cols-3 sm:py-0 auto-rows-[200px] sm:auto-rows-fr">
      {filteredProjects.map((project, i) => {
        return <PortfolioItem key={i} i={i} name={project.name} />;
      })}
    </ul>
  );
};
export default PortfolioList;
