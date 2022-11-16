type Queries = {
  language: string;
};

const generateQueries = (queries: Queries) => {
  const mapQueries = Object.entries(queries).map(([key, value]) => {
    return `${key}=${value}`;
  });

  return mapQueries.join('&');
};

export const generateUrlMovieDb = (url: string, queries?: Queries) => {
  const queriesString = queries ? `${generateQueries(queries)}` : '';
  const fullUrl = `${process.env.BASE_URL_MOVIE_DB + url}?api_key=${
    process.env.API_KEY
  }&${queriesString}`;
  return fullUrl;
};
