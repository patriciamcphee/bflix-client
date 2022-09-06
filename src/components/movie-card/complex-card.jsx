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

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    return (
      
    <Card sx={{ maxWidth: 250 }} raised='true'>
      <CardMedia
        component="img"
        height="375"
        crossOrigin='anonymous'
        image={movie.ImagePath}
        alt={movie.Title}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {movie.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.Description}
        </Typography>
      </CardContent>
      <CardActions  disableSpacing gutterBottom>
      <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button size="small"
                    endIcon={
                      <svg
                        width={16}
                        height={16}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    } onClick={() => onMovieClick(movie)}>Learn More</Button>
      </CardActions>
    </Card>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      ImagePath: PropTypes.string.isRequired,
   }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};
