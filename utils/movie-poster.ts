import React from 'react';

export const getMoviePoster = (imagePath: string) => {
  return `https://image.tmdb.org/t/p/w500${imagePath}`;
};
