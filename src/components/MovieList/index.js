import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView} from 'react-native';
import {
  GET_BY_GENRES,
  GET_GENRES,
  GET_POSTER_PATH,
} from '../../constants/routes';
import RestServices from '../../services/api';
import MovieListItem from '../MovieListItem';
import ScreenContainer from '../ScreenContainer';
const Rest = new RestServices();

const MovieList = () => {
  const navigation = useNavigation();
  const {params} = useRoute();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getMovies() {
      const moviesList = [];
      const moviesOfGenre = await Rest.get(GET_BY_GENRES(params.genreId, 1));
      moviesOfGenre.data.results.forEach((movie) => {
        let auxObj = {};
        auxObj.movieId = movie.id;
        auxObj.posterPath = GET_POSTER_PATH(movie.poster_path);
        moviesList.push(auxObj);
      });
      setMovies(moviesList);
    }
    getMovies();
  }, []);

  const renderItem = ({item}) => (
    <MovieListItem
      imgSrc={item.posterPath}
      id={item.movieId}
      onPress={() =>
        navigation.navigate('MovieView', {
          id: item.movieId,
        })
      }
    />
  );

  return (
    <ScreenContainer>
      {movies.length > 0 && (
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-around'}}
          key={'#'}
          data={movies}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={(item) => item.movieId.toString()}
        />
      )}
    </ScreenContainer>
  );
};

export default MovieList;
