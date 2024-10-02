export interface Slide{
    src: string;
    alt: string;
}


export interface CarouselProps {
    data: Slide[];
  }

  export interface Movie{
    title: string;
    year: number;
    rating:string;
    actors:string[];
    genre:string;
    synopsis:string;
     thumbnail:string;
  }
  