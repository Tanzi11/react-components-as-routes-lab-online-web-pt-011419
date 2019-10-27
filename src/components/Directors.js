import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => (
        <div key={director}>Name: {director.name}
          <p>Movies:
            <ul>
              {director.movies.map(movie => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Directors
