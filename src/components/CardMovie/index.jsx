import React from 'react';

import Badge from '@/components/Badge';

const CardMovie = () => {
  return (
    <div className="flex flex-col gap-3 max-w-[300px]">
      <div className="relative">
        <div className="bg-gray-400 w-full aspect-[3/4] rounded-lg" />

        <div className="absolute bottom-0 w-full p-2 flex justify-between">
          <Badge>
            <p className="text-amber-500 subtitle-1">90%</p>
          </Badge>

          <Badge>
            <p className="text-red-500">M</p>
          </Badge>
        </div>
      </div>

      <div className="px-2">
        <p>Spider-Man: No Way Home</p>
        <p className="mt-1 subtitle-1 text-zinc-400">15 December 2021</p>
      </div>
    </div>
  );
};

export default CardMovie;
