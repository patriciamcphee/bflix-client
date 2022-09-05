import React from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/material';



import { LoginView } from '../login-view/login-view'; //Import LoginView component
import { SimpleSignInForm } from '../authentication/SimpleSignInForm/SimpleSignInForm';
import { MovieCard } from '../movie-card/complex-card';
//import { MovieCard } from '../movie-card/movie-card'; //Import MovieCard component
import { MovieView } from '../movie-view/movie-view2';
//import { MovieView } from '../movie-view/movie-view'; //Import MovieView component
import { RegistrationView } from '../registration-view/registration-view'; //Import RegistrationView component

export class MainView extends React.Component {

    constructor() {
        super();
        this.state = {
          movies: [],
          selectedMovie: null,
          user: null
        }
      }

      componentDidMount(){
        axios.get('https://my-bmovie-app.herokuapp.com/movies')
          .then(response => {
            this.setState({
              movies: response.data
            });
          })
          .catch(error => {
            console.log(error);
          });
      }

    /*When a movie is clicked, this function is invoked and updates the state of the `selectedMovie` *property to that movie*/
    setSelectedMovie(newSelectedMovie) {
      this.setState({
          selectedMovie: newSelectedMovie
      });
  }

      /* When a user successfully logs in, this function updates the `user` property in state to that *particular user*/
  onLoggedIn(user) {
      this.setState({
          user
      });
  }

  onRegistration(registered) {
      this.setState({
          registered
      });
  }

  render() {
      const { movies, selectedMovie, user, registered } = this.state;
          /* If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*/
      if (!user) return <SimpleSignInForm onLoggedIn={(user) => this.onLoggedIn(user)} />;


      if (selectedMovie) return <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => {this.setSelectedMovie(newSelectedMovie); }}/>

      
      if (!registered) return <RegistrationView onRegistration={(register) => this.onRegistration(register)} />; 
      
          // Before the movies have been loaded
      if (movies.length ===0) return <Grid className='main-view'/>;

      return (
        
        
<Grid container spacing={2} columns={12} className='main-view'>
  
  {selectedMovie 
    ? <MovieView movie={selectedMovie} on BackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
      : movies.map(movie => (
      <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie) }}/>
    ))
  }

</Grid>

      );
  }
}