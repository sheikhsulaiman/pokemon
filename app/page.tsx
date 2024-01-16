import PokeCard from "@/components/PokeCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface Type {
  count: number;
  next: string | null;
  previous: string | null;
  results: [
    {
      name: string;
      url: string;
    }
  ];
}

async function App({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const url = "https://pokeapi.co/api/v2/pokemon/";
  const { offset, limit } = searchParams;
  const formatedUrl = url + "?offset=" + offset + "&" + "limit=" + limit;

  const response = await fetch(formatedUrl);
  const data: Type = await response.json();

  const next = data.next?.split("?")[1];
  const previous = data.previous?.split("?")[1];

  return (
    <main className="container min-h-screen mx-auto">
      <header className="flex p-2 items-center justify-between container mx-auto mb-2 border bg-sky-200">
        <Link href={previous ? "/?" + previous : "/"}>
          <Button>
            <ChevronLeft />
          </Button>
        </Link>
        <Link href={"/"}>
          <h1 className="text-2xl font-bold">Poke Info</h1>
        </Link>
        <Link href={next ? "/?" + next : "/"}>
          <Button>
            <ChevronRight />
          </Button>
        </Link>
      </header>

      <div className="grid grid-cols-12 gap-2">
        {data &&
          data.results.map((result) => (
            <PokeCard key={result.url} name={result.name} url={result.url} />
          ))}
      </div>
    </main>
  );
}

export default App;
