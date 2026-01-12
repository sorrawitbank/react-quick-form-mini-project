import type { Movie } from "../data/movies";

interface Props {
  movies: Movie[];
  onChange: (movieValue: string) => void;
  selectedMovie: string;
  errorLabel?: string;
}

function MovieRadio(props: Props) {
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
            onClick={() => props.onChange(movie.title)}
          >
            <input
              type="radio"
              name="movie-selection"
              value={movie.title}
              checked={props.selectedMovie === movie.title}
              onChange={() => props.onChange(movie.title)}
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
