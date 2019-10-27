import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div className="movies">
      <h1>Movies Page</h1>
        {movies.map(movie => (
          <div key={movie}>Name: {movie.title}
            <p>Time:{movie.time}</p>
            <p>Genres:
              <ul>
                {movie.genres.map(genre => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </p>
          </div>
        ))}
    </div>
  );
};

export default Movies;
