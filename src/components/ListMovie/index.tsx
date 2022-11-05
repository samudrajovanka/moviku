import CardMovie from '@/components/CardMovie';
import Title from '@/components/Title';

import type { ListMovieProps } from './types';

const ListMovie = ({ title, movies }: ListMovieProps) => {
  return (
    <>
      <Title className="mt-8">{title}</Title>

      <div className="my-5 grid grid-cols-4 gap-5">
        {movies.map((movie) => (
          <CardMovie
            key={movie.id}
            imageUrl={movie.poster_path}
            rating={movie.vote_average}
            isAdult={movie.adult}
            title={movie.title}
            releaseDate={movie.release_date}
          />
        ))}
      </div>
    </>
  );
};

export default ListMovie;
