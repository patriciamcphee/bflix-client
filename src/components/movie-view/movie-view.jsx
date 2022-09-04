import React from 'react';
import PropTypes from 'prop-types';

export class MovieView extends React.Component 
{

    keypressCallback(event) {
        console.log(event.key);
    }

    componentDidMount() {
        document.addEventListener('keypress', this.keypressCallback);
    }

  render() {
    const { movie, onBackClick } = this.props;
    

    return (
      <div className='movie-view'>
        <div className='movie-poster'>
        <img crossOrigin='anonymous'
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
        <div className='movie-genre'>
        <span className='genre'><b>Genre:</b> </span>
        <span className='value'>{movie.Genre.Name}</span>
      </div>
      <div className='genre-description'>
        <span className='genre value'>{movie.Genre.Description}</span>
      </div>
      <div className='movie-director'>
        <span className='director'><b>Director:</b> </span>
        <span className='value'>{movie.Director.Name}</span>
      </div>
      <div className='director-birth'>
      <span className='director value'><b>Birth:</b> {movie.Director.Birth}</span>
      </div>
      <div className='director-death'>
        <span className='director value'><b>Death:</b> {movie.Director.Death}</span>
      </div>
      <div className='director-bio'>
        <span className='director value'>{movie.Director.Bio}</span>
      </div>
      <button onClick={() => { onBackClick(null); }}>Back</button>

    </div>
    );
  }
}
MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string.isRequired,
      Death: PropTypes.string,
    }),
    ImagePath: PropTypes.string.isRequired,
  }).isRequired,
};