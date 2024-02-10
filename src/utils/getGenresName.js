import { GENRES } from "./constants";

const getGenresName = (genreId) => {
  const genreName = [];
  genreId.forEach((id) => {
    const genre = GENRES.find((genres) => genres.id === id);
    genreName.push(genre?.name);
  });
  return genreName;
};
export default getGenresName;
