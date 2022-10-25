import React from 'react';

import CardMovie from '@/components/CardMovie';
import Title from '@/components/Title';

const ListMovie = ({ title, movies }) => {
  return (
    <>
      <Title className="mt-8">{title}</Title>

      <div className="mt-5">
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
