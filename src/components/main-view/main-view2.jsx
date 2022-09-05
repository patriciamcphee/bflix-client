import React from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';



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
        
        <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>



            
            {mock.map((item, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Box
                  component={'a'}
                  href={''}
                  display={'block'}
                  width={1}
                  height={1}
                  sx={{
                    textDecoration: 'none',
                    transition: 'all .2s ease-in-out',
                    '&:hover': {
                      transform: `translateY(-${theme.spacing(1 / 2)})`,
                    },
                  }}
                >
                  <Box
                    component={Card}
                    width={1}
                    height={1}
                    display={'flex'}
                    flexDirection={'column'}
                  >
                    <CardMedia
                      image={item.image}
                      title={item.title}
                      sx={{
                        height: { xs: 340, md: 400 },
                        filter:
                          theme.palette.mode === 'dark'
                            ? 'brightness(0.7)'
                            : 'none',
                      }}
                    />
                    <Box component={CardContent}>
                      <Typography variant={'h6'} fontWeight={700} gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography variant={'body2'} color="text.secondary">
                        {item.description}
                      </Typography>
                    </Box>
                    <Box flexGrow={1} />
                    <Box component={CardActions} justifyContent={'flex-start'}>
                      <Button
                        size="large"
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
                        }
                      >
                        Learn more
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        
      );
    };
  }