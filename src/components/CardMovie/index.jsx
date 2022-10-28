import React from 'react';

import Image from 'next/image';
import Moment from 'react-moment';

import MatureIcon from '@/assets/icons/mature.svg';
import RateIcon from '@/assets/icons/rate.svg';
import Badge from '@/components/Badge';

const CardMovie = ({ imageUrl, rating, isAdult, title, releaseDate }) => {
  return (
    <div className="flex flex-col gap-3 max-w-[300px]">
      <div className="relative">
        <div className="static bg-gray-400 w-full aspect-[3/4] rounded-lg">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${imageUrl}`}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <div className="absolute bottom-0 w-full p-2 flex justify-between">
          <Badge>
            <RateIcon className="text-amber-500 text-[32px]" />
            <p className="text-amber-500 subtitle-1">{rating}</p>
          </Badge>

          {isAdult && (
            <Badge>
              <MatureIcon className="text-red-500 text-[32px]" />
            </Badge>
          )}
        </div>
      </div>

      <div className="px-2">
        <p>{title}</p>
        <p className="mt-1 subtitle-1 text-zinc-400">
          <Moment format="DD MMMM YYYY">{releaseDate}</Moment>
        </p>
      </div>
    </div>
  );
};

export default CardMovie;
