import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div className="actor">
      <h1>Actors Page</h1>
      {actors.map(actor => (
        <div key={actor}>Name: {actor.name}
           <p>Movies:
             <ul>
               {actor.movies.map(movie => (
                 <li key={movie}>{movie}</li>
               ))}
               </ul>
            </p>
        </div>
      ))}
    </div>
  );
}

export default Actors;
