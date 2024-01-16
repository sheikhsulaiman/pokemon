import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

const PokeCard: React.FC<{
  name: string;
  url: string;
}> = ({ name, url }) => {
  return (
    <Link href={`/${name}`} className="col-span-6 sm:col-span-4 md:col-span-3">
      <Card key={url}>
        <CardContent>
          <img
            src={`https://img.pokemondb.net/sprites/home/normal/${name}.png`}
            alt={name}
          />
        </CardContent>
        <CardFooter className="bg-sky-50 p-2">
          <p className="text-2xl capitalize font-bold">{name}</p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PokeCard;
