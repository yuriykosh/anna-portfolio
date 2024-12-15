type PortfolioItemProps = {
  i: number;
  name: string;
};

const PortfolioItem: React.FC<PortfolioItemProps> = ({ i, name }) => {
  return (
    <li className="w-full h-full aspect-square flex items-center justify-center bg-foreground text-background">
      {name || `Project ${i + 1}`}
    </li>
  );
};
export default PortfolioItem;
