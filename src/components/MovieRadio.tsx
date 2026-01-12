import { useState } from "react";
import type { Movie } from "../data/movies";

interface Props {
  movies: Movie[];
  setMovie: (movieValue: string) => void;
  errorLabel?: string;
}

function MovieRadio(props: Props) {
  const [selectedMovie, setSelectedMovie] = useState<string>("");

  const handleMovieChange = (movieValue: string) => {
    setSelectedMovie(movieValue);
    props.setMovie(movieValue);
  };

  return (
    <div
      className={`flex flex-col gap-2 ${
        props.errorLabel && "border border-brand-red"
      } rounded-lg`}
    >
      {props.movies.map((movie) => {
        return (
          <div
            key={movie.title}
            className="flex gap-2 p-2 cursor-pointer hover:bg-grey-50 rounded"
            onClick={() => handleMovieChange(movie.title)}
          >
            <input
              type="radio"
              name="movie-selection"
              value={movie.title}
              checked={selectedMovie === movie.title}
              onChange={() => handleMovieChange(movie.title)}
              className="h-fit mt-1"
            />
            <div className="grid gap-1 text-sm">
              <span className="text-grey-200">
                {movie.title} ({movie.year})
              </span>
              <span className="text-grey-100">Director: {movie.director}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MovieRadio;
