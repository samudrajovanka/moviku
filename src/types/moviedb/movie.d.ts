export type Movie = {
  id: number;
  title: string;
  release_date: string;
  adult: boolean;
  vote_average: number;
  poster_path: string | null;
};

export type ResponseMoviesDb = {
  results: Movie[];
};
