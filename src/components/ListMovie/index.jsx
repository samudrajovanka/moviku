import React from 'react';

import CardMovie from '@/components/CardMovie';
import Title from '@/components/Title';

const ListMovie = ({ title, movies }) => {
  return (
    <>
      <Title className="mt-8">{title}</Title>

      <div className="mt-5 grid grid-cols-4 gap-5">
        {movies.map((movie) => (
          <CardMovie
            key={movie.id}
            imageUrl={movie.poster_path}
            rating={`${movie.vote_average * 10} %`}
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
