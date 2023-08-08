import React from 'react';
import { Link } from 'react-router-dom';

import './ShowList.css';

function ShowList({ shows }) {
  return (
    <div>
            <h1 className='app-heading'>TV Show App</h1>
      <h2>TV Shows</h2>
      <div className="show-list">
        {shows.map(show => (
          <div key={show.show.id} className="show-card">
            <Link to={`/summary/${show.show.id}`}>
              {show.show.image && show.show.image.medium ? (
                <img src={show.show.image.medium} alt={show.show.name} />
              ) : (
                <div className="placeholder-image">Image Not Available</div>
              )}
              <h3 className="movie-name">{show.show.name}</h3>
            </Link>
            <p>Type: {show.show.type}</p>
            <p>Language: {show.show.language}</p>
            <p>Released On: {show.show.premiered}</p>
            <p>Runtime: {show.show.runtime} minutes</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowList;
