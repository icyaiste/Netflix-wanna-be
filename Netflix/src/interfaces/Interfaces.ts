import { SetStateAction, Dispatch } from 'react';

export interface Movie {
  title: string;
  year: number;
  rating: string;
  actors: string[];
  genre: string;
  synopsis: string;
  thumbnail: string;
}

export interface CarouselProps {
  data: Movie[];
}

export interface BookmarkProps {
  movie: Movie;
}

export interface bookmarkContextInterface {
  faves: Movie[];
  setFaves: Dispatch<SetStateAction<Movie[]>>;
}
