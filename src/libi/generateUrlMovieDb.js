export const generateUrlMovieDb = (url) => {
  const fulUrl = `${process.env.BASE_URL_MOVIE_DB}${url}?api_key=${process.env.API_KEY}`;

  return fulUrl;
};
