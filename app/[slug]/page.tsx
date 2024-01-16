import PokeDetails from "@/components/PokeDetails";
import BackButton from "@/components/BackButton";

export interface DataType {
  number: number;
  name: string;
  gen: number;
  species: string;
  types: string[];
  abilities: [
    {
      name: string;
      description: string;
      hidden: boolean;
    }
  ];
  height: string;
  weight: string;
  mega: boolean;
  baseStats: {
    hp: number;
    attack: number;
    defense: number;
    spAtk: number;
    spDef: number;
    speed: number;
  };
  training: {
    evYield: string;
    catchRate: string;
    baseFriendship: string;
    baseExp: string;
    growthRate: string;
  };
  breeding: {
    gender: string;
    eggGroups: string[];
    eggCycles: string;
  };
  sprite: string;
}

const page = async ({ params }: { params: { slug: string } }) => {
  const response = await fetch(
    "https://ex.traction.one/pokedex/pokemon/" + params.slug
  );
  const data = await response.json();

  if (data.length === 0) {
    return (
      <main className="container min-h-max mx-auto">
        <p className="my-auto w-full text-center h-full">
          failed to load data of{" " + params.slug}
        </p>
      </main>
    );
  }
  return (
    <main className="container mx-auto">
      <div className="flex flex-col p-2 gap-2">
        <BackButton />
        <PokeDetails data={data} />
      </div>
    </main>
  );
};

export default page;
