type PortfolioItemProps = {
  i: number;
  name: string;
};

const PortfolioItem: React.FC<PortfolioItemProps> = ({ i, name }) => {
  return (
    <li className="w-full h-full flex items-center justify-center bg-foreground text-background">
      {name || i}
    </li>
  );
};
export default PortfolioItem;
