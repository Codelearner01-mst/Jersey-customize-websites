import { jerseyStore } from "./store.js";

//Filter jerseys by league and return array
export const filterJerseysByLeague = (searchTerm) => {
  if (searchTerm === "all") {
    return jerseyStore;
  }
  const filteredJerseys = jerseyStore.filter((jersey) => {
    return jersey.league.toLowerCase() === searchTerm.toLowerCase();
  });
  return filteredJerseys;
};
