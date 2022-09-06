import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
      
    <Card sx={{ maxWidth: 400 }} raised='true'>
      <CardMedia>      
        <img src={movie.ImagePath} crossOrigin='anonymous' />
      </CardMedia>

      <CardContent>
        <Typography   variant="h5" component="div">
          {movie.Title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {movie.Description}
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          <b>{movie.Director.Name}</b> - {movie.Director.Bio}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Birth:</b> {movie.Director.Birth}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Death:</b> {movie.Director.Death}
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          <b>{movie.Genre.Name}</b> - {movie.Genre.Description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <br />
        <b>Riffed:</b> {movie.Riffed}<br />
        <b>Riffable:</b> {movie.Riffable}
        </Typography>
      </CardContent>
      <CardActions>
      <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button variant='contained' size="small" onClick={() => { onBackClick(null); }}>Back</Button>
      </CardActions>
    </Card>
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
    Riffed: PropTypes.string.isRequired,
    Riffable: PropTypes.string.isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string.isRequired,
      Death: PropTypes.string,
    }),
    ImagePath: PropTypes.string.isRequired,
  }).isRequired,
};
