"use client";
import { useEffect, useState } from "react";
import PokeCard from "@/components/PokeCard";
import Header from "@/components/Header";

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

function App() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [fetchUrl, setFetchUrl] = useState<string>(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Type>();
  const leftPageHandler = () => {
    if (data?.previous) setFetchUrl(data.previous);
  };
  const rightPageHandler = () => {
    if (data?.next) setFetchUrl(data.next);
  };
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(fetchUrl);
      const rawData = await response.json();
      setData(rawData);
      setIsLoading(false);
    };
    fetchData();
  }, [fetchUrl]);

  if (!isMounted) {
    return null;
  }
  return (
    <main className="container min-h-screen mx-auto">
      <Header
        isLoading={isLoading}
        onLeft={leftPageHandler}
        onRight={rightPageHandler}
      />
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
