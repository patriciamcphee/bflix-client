import React from 'react';
import { MovieCard } from '../movie-card/movie-card'; //Import MovieCard component
import { MovieView } from '../movie-view/movie-view'; //Import MovieView component

export class MainView extends React.Component {

  constructor(){
    super();
    this.state = {
      movies: [
          { 
              _id: '62c31d1db16106ca5a07b825', 
              Title: 'The Room', 
              Description: 'Johnny is a successful bank executive who lives quietly in a San Francisco townhouse with his fiancée, Lisa. One day, putting aside any scruple, she seduces Johnny\'s best friend, Mark. From there, nothing will be the same again.', 
              Director: {
                  Name: 'Tommy Wiseau',
                  Bio: 'An American actor, director, screenwriter & producer. He trained to be an actor at American Conservatory Theater, Vince Chase Workshop, Jean Shelton Acting Lab, Laney College, and Stella Adler Academy of Acting.',
                  Birth: 'October 3, 1955'
              },
              Genre: {
                  Name: 'Drama',
                  Description: 'Dramas frequently follow characters you\'d see as your friends, neighbors, and family dealing with the struggles of everyday life. They usually take place in a home, office setting, or with a group of characters forced to interact day to day.'
              },
              ImagePath: 'https://m.media-amazon.com/images/M/MV5BYjEzN2FlYmYtNDkwMC00NGFkLWE5ODctYmE5NmYxNzE2MmRiXkEyXkFqcGdeQXVyMjMwODc5Mw@@._V1_UY209_CR0,0,140,209_AL_.jpg',
              Featured: true,
              Rated: 'R',
              Released: '2003',
              Riffed: true
          },
          { 
              _id: '62c31d0eb16106ca5a07b824', 
              Title: 'Hard Ticket to Hawaii', 
              Description: 'In Hawaii, an undercover DEA agent and her civilian friend stumble upon a drug-trafficking operation, and have to enlist the help of all their colleagues/friends to go after the vicious drug kingpin.', 
              Director: {
                  Name: 'Andy Sidaris',
                  Bio: "Born in Chicago, Illinois, he was an actor and a pioneer director of TV sports shows. He directed NFL Monday Night Football (1970) and earned an Emmy for his work directing the televised 1968 Summer Olympics in 1969. ",
                  Birth: 'February 3, 1931',
                  Death: 'March 2, 2007'
              },
              Genre: {
                  Name: 'Action',
                  Description: 'A clear division between good and evil. Lots of fighting and set pieces. Their pacing and structure are built around scenes like car chases and their climaxes often have the biggest set-pieces.'
              },
              ImagePath: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Hard_Ticket_to_Hawaii_%28film%29_cover.jpg',
              Featured: false,
              Rated: 'R',
              Released: '1987',
              Riffed: true
          },
          { 
              _id: '62c31e4fb16106ca5a07b829', 
              Title: 'Behind the Mask: The Rise of Leslie Vernon', 
              Description: 'The next great psycho horror slasher has given a documentary crew exclusive access to his life as he plans his reign of terror over the sleepy town of Glen Echo.', 
              Director: {
                  Name: 'Scott Glosserman',
                  Bio: "A writer/director/producer, and CEO of Gathr.",
                  Birth: 'November, 21, 1976'
              },
              Genre: {
                  Name: 'Horror',
                  Description: 'The final girl, the \"not dead yet\" scare, and the dystopian endings. Horror is famous for having story beats that we come to expect like jump scares. Lean into them and find ways to subvert. You have subsets like haunted houses, slashers, zombies, evil creatures, and other subgenres.'
              },
              ImagePath: 'https://upload.wikimedia.org/wikipedia/en/2/23/Behind_the_mask_ver2.jpg',
              Featured: true,
              Rate: 'R',
              Released: '2006',
              Riffed: false
          },
        ],
        selectedMovie: null
      };
    }

    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }

    render() {
        const { movies, selectedMovie } = this.state;

        if (selectedMovie) return <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>;

        if (movies.length ===0) return <div className='main-view'>The list is empty!</div>;

        return (
            <div className='main-view'>
                {movies.map(movie => <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => {this.setState({ selectedMovie: newSelectedMovie }); }} />)}
            </div>
        );
    }
}
