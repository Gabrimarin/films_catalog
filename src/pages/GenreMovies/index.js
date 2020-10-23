import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import RestServices from '../../services/api';
import {LoadingComponent, MovieList, ScreenContainer} from '../../components';
import {processApiMovieList} from '../../utils/processData';
const Rest = new RestServices();

const GenreMovies = ({title}) => {
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
      let response;
      response = await Rest.getMovieOfGenre(params.genreId, page);
      const moviesList = processApiMovieList(response.data);
      setMovies((prevList) => prevList.concat(moviesList));
      setLoadingPage(false);
      setLoadingItems(true);
    }
    getMovies();
  }, [page]);

  return (
    <ScreenContainer
      title={params?.title + ' movies'}
      headerHidden={params?.origin !== 'category'}>
      {loadingPage ? (
        <LoadingComponent />
      ) : (
        <MovieList
          data={movies}
          onEndReached={() => setPage((pg) => pg + 1)}
          loadingFooter={loadingItems}
        />
      )}
    </ScreenContainer>
  );
};

export default GenreMovies;
