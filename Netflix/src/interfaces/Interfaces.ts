import { SetStateAction, Dispatch } from 'react';

export interface Movie {
  title: string;
  year: number;
  rating: string;
  actors: string[];
  genre: string;
  synopsis: string;
  thumbnail: string;
  isTrending?: boolean;
}

export interface CarouselProps {
  data: Movie[];
  labelledBy: string;
}

export interface BookmarkProps {
  movie: Movie;
}

export interface bookmarkContextInterface {
  faves: Movie[];
  setFaves: Dispatch<SetStateAction<Movie[]>>;
}
