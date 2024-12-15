import { CarbonProgressBarRound } from "@/components/icons/CarbonProgressBarRound";

interface LoaderProps {
  text?: string;
}

const Loader: React.FC<LoaderProps> = ({ text }) => {
  return (
    <div className="w-full h-full flex flex-col gap-2 items-center justify-center text-xs">
      <div className="w-8 h-8 text-foreground opacity-60 animate-spin">
        <CarbonProgressBarRound />
      </div>
      {text}
      showreel is loading...
    </div>
  );
};
export default Loader;
