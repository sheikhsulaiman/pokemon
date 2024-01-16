"use client";
import React, { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import { DataType } from "@/app/[slug]/page";
import { Button } from "./ui/button";

const PokeDetails = ({ data }: { data: DataType[] }) => {
  const [selectedPokemon, setSelectedPokemon] = useState(data[0]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div className="flex gap-4 flex-col mt-6 md:flex-row">
        {data.length > 1 &&
          data.map((e, index) => (
            <Button
              key={index}
              type="button"
              onClick={() => setSelectedPokemon(e)}
              variant={selectedPokemon! === e ? "default" : "outline"}
            >
              {e.name}
            </Button>
          ))}
        {!selectedPokemon.name && (
          <div className="w-full h-full min-h-12 flex justify-center items-center">
            <h1 className="font-bold text-xl">
              Failed to fetch data, try again.
            </h1>
          </div>
        )}
      </div>
      {selectedPokemon.name && (
        <div className="flex gap-4 flex-col mt-6 md:flex-row">
          <img
            src={selectedPokemon.sprite}
            alt={selectedPokemon.name}
            className="border-2 rounded-md"
          />{" "}
          <div className="w-full md:space-x-2">
            <div className="flex md:p-2 items-center justify-between">
              <h1 className="text-2xl font-bold">{selectedPokemon.name}</h1>
              <div className="flex items-center justify-center gap-2">
                <Badge
                  variant={"secondary"}
                  className={cn(
                    !selectedPokemon.mega && "line-through text-red-700"
                  )}
                >
                  {"Mega"}
                </Badge>
                <Badge>{"Gen: " + selectedPokemon.gen}</Badge>
                <Badge>{"Number: " + selectedPokemon.number}</Badge>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-muted-foreground">{selectedPokemon.species}</p>
              <p className="text-muted-foreground">
                {"Height: " + selectedPokemon.height}
              </p>
              <p className="text-muted-foreground">
                {"Weight: " + selectedPokemon.weight}
              </p>
              <p className="text-muted-foreground">
                {"Type: "}
                {selectedPokemon.types + ""}
              </p>
              <div className="border p-2 rounded-sm">
                <h1 className="mb-2 font-semibold">Base Stats</h1>
                <div className="flex flex-wrap gap-2">
                  <div className="flex border  rounded-md overflow-hidden">
                    <p className="bg-primary text-primary-foreground p-2">hp</p>
                    <p className="p-2">{selectedPokemon.baseStats.hp}</p>
                  </div>
                  <div className="flex border  rounded-md overflow-hidden">
                    <p className="p-2 bg-primary text-primary-foreground">
                      attack
                    </p>
                    <p className="p-2">{selectedPokemon.baseStats.attack}</p>
                  </div>
                  <div className="flex border overflow-hidden  rounded-md">
                    <p className="p-2 bg-primary text-primary-foreground">
                      defence
                    </p>
                    <p className="p-2">{selectedPokemon.baseStats.defense}</p>
                  </div>
                  <div className="flex border overflow-hidden  rounded-md">
                    <p className="p-2 bg-primary text-primary-foreground">
                      spAtk
                    </p>
                    <p className="p-2">{selectedPokemon.baseStats.spAtk}</p>
                  </div>
                  <div className="flex border overflow-hidden rounded-md">
                    <p className="p-2 bg-primary text-primary-foreground">
                      spDef
                    </p>
                    <p className="p-2">{selectedPokemon.baseStats.spDef}</p>
                  </div>
                  <div className="flex border overflow-hidden rounded-md">
                    <p className="p-2 bg-primary text-primary-foreground">
                      speed
                    </p>
                    <p className="p-2">{selectedPokemon.baseStats.speed}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {selectedPokemon.training && (
        <div className="flex flex-col md:flex-row gap-2">
          <div className="border flex-1 rounded-sm p-2">
            <h1 className="font-semibold">Training</h1>
            <p className="text-muted-foreground">
              {"evYield: " + selectedPokemon.training.evYield}
            </p>
            <p className="text-muted-foreground">
              {"catchRate: " + selectedPokemon.training.catchRate}
            </p>
            <p className="text-muted-foreground">
              {"baseFriendship: " + selectedPokemon.training.baseFriendship}
            </p>
            <p className="text-muted-foreground">
              {"baseExp: " + selectedPokemon.training.baseExp}
            </p>
            <p className="text-muted-foreground">
              {"growthRate: " + selectedPokemon.training.growthRate}
            </p>
          </div>
          <div className="border flex-1 rounded-sm p-2">
            <h1 className="font-semibold">Breeding</h1>
            <p className="text-muted-foreground">
              {"Gender: " + selectedPokemon.breeding.gender}
            </p>
            <p className="text-muted-foreground">
              {"Egg Cycles: " + selectedPokemon.breeding.eggCycles}
            </p>
            <p>{"Egg Groups: "}</p>
            {selectedPokemon.breeding.eggGroups.map(
              (eggGroup, index: number) => (
                <p key={index} className="ml-2 text-muted-foreground">
                  {index + 1 + ". " + eggGroup}
                </p>
              )
            )}
          </div>
        </div>
      )}
      {selectedPokemon.abilities && (
        <div className="p-2 border rounded-sm">
          <h1 className="font-bold">Abilities</h1>
          <div className="w-full grid gap-2 grid-cols-12">
            {selectedPokemon.abilities.map((ability) => (
              <div
                key={ability.name}
                className="col-span-12 md:col-span-6 lg:col-span-4 p-2 rounded-md shadow-md"
              >
                <div className="flex items-center justify-between">
                  <p className="text-muted-foreground text-lg">
                    <span className="font-semibold">{"Name: "}</span>{" "}
                    {ability.name}
                  </p>
                  <Badge
                    variant={"secondary"}
                    className={cn(
                      !ability.hidden && "line-through text-red-700"
                    )}
                  >
                    {"hidden"}
                  </Badge>
                </div>
                <hr className="my-1" />
                <p className="text-muted-foreground">{ability.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default PokeDetails;
