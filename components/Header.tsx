import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { Button } from "./ui/button";

const Header = ({
  isLoading,
  onLeft,
  onRight,
}: {
  isLoading: boolean;
  onLeft: () => void;
  onRight: () => void;
}) => {
  return (
    <header className="flex p-2 items-center justify-between container mx-auto mb-2 border bg-sky-200">
      <Button onClick={onLeft} disabled={isLoading}>
        {isLoading ? <Loader2 className="animate-spin" /> : <ChevronLeft />}
      </Button>
      <h1 className="text-2xl font-bold">Poke Info</h1>
      <Button onClick={onRight} disabled={isLoading}>
        {isLoading ? <Loader2 className="animate-spin" /> : <ChevronRight />}
      </Button>
    </header>
  );
};

export default Header;
