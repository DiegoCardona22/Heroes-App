// @scripts
import { heroes } from "../data/heroes";

export const getHeroes = (publisher: string) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`Publisher "${publisher}" Is Not Correct`);
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};
