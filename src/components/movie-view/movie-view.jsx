import React from 'react';

export class MovieView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <div className='movie-view'>
        <div className='movie-poster'>
        <img crossOrigin="anonymous"
            src={movie.ImagePath} />
        </div>
        <div className='movie-title'>
            <span className='label'><b>Title:</b> </span>
            <span className='value'>{movie.Title}</span>
        </div>
        <div className='movie-description'>
            <span className='label'><b>Description: </b></span>
            <span className='value'>{movie.Description}</span>
        </div>
        <div className='movie-director'>
            <span className='label'><b>Director: </b></span>
            <span className='value'>{movie.Director.Name + ' ~ ' + movie.Director.Bio}</span>
        </div>
        <div className='movie-genre'>
            <span className='label'><b>Genre: </b></span>
            <span className='value'>{movie.Genre.Name + ' ~ ' + movie.Genre.Description}</span>
        </div>
        <button onClick={() => { onBackClick(null); }}>Back</button>
      </div>
    );
  }
}
