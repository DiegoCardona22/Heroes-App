// @packages
import { useMemo } from "react";

// @scripts
import HeroCard from "./HeroCard";

// @helpers
import { getHeroes } from "../helpers";

// @interfaces
interface IHeroListProps {
  publisher: string;
}

export const HeroList = ({ publisher }: IHeroListProps) => {
  const heroes = useMemo(() => getHeroes(publisher), [publisher]);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
