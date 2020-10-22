import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {GET_POSTER_PATH} from '../../constants/routes';
import RestServices from '../../services/api';
import {
  ListFooter,
  LoadingComponent,
  MovieListItem,
  ScreenContainer,
} from '../../components';
const Rest = new RestServices();

const GenreMovies = ({title}) => {
  const navigation = useNavigation();
  const {params} = useRoute();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loadingPage, setLoadingPage] = useState(false);
  const [loadingItems, setLoadingItems] = useState(false);

  useEffect(() => {
    async function getMovies() {
      if (movies.length === 0) {
        setLoadingPage(true);
      } else {
        setLoadingItems(true);
      }
      const moviesList = [];
      let response;
      if (params?.origin === 'category') {
        response = await Rest.getMovieOfGenre(params.genreId, page);
      } else {
        response = await Rest.getMoviesByTitle(title, page);
      }
      const newMovies = response.data;
      if (newMovies.length === 0) {
        setLoadingItems(false);
        return;
      }
      newMovies.forEach((movie) => {
        let auxObj = {};
        auxObj.movieId = movie.id;
        auxObj.posterPath = GET_POSTER_PATH(movie.poster_path);
        auxObj.year = movie.release_date.slice(0, 4);
        auxObj.title = movie.original_title;
        moviesList.push(auxObj);
      });
      setMovies((prevList) => prevList.concat(moviesList));
      setLoadingPage(false);
      setLoadingItems(true);
    }
    getMovies();
  }, [page]);

  const renderItem = ({item}) => (
    <MovieListItem
      title={item.title}
      imgSrc={item.posterPath}
      id={item.movieId}
      year={item.year}
      onPress={() =>
        navigation.navigate('MovieView', {
          id: item.movieId,
        })
      }
    />
  );

  return (
    <ScreenContainer
      title={params?.title + ' movies'}
      headerHidden={params?.origin !== 'category'}>
      {loadingPage ? (
        <LoadingComponent />
      ) : (
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-around', marginTop: 10}}
          key={'#'}
          data={movies}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={(item) => item.movieId.toString()}
          onEndReached={() => setPage((prevPage) => prevPage + 1)}
          ListFooterComponent={<ListFooter loading={loadingItems} />}
          onEndReachedThreshold={0.1}
        />
      )}
    </ScreenContainer>
  );
};

export default GenreMovies;
