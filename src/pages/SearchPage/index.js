import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import RestServices from '../../services/api';
import {
  LoadingComponent,
  MovieList,
  ScreenContainer,
  SearchBar,
} from '../../components';
import {processApiMovieList} from '../../utils/processData';

const Rest = new RestServices();

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadingItems, setLoadingItems] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const handleError = (response) => {
    setHasError(true);
  };

  async function getMovies() {
    setLoadingMore(true);
    if (search.length === 0) {
      return [];
    }
    const response = await Rest.getMoviesByTitle(search, page);
    const moviesList = processApiMovieList(response.data);
    setLoadingMore(false);
    return moviesList;
  }

  useEffect(() => {
    setLoadingItems(true);
    const delayDebounceFn = setTimeout(() => {
      getMovies().then((list) => setMovies(list));
    }, 300);
    setLoadingItems(false);
    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  useEffect(() => {
    getMovies().then((list) => setMovies(movies.concat(list)));
  }, [page]);

  const renderMainComponent = () => {
    if (loadingItems) {
      return <LoadingComponent />;
    } else if (hasError) {
      return <Text>Error</Text>;
    } else if (search.length !== 0 || movies.length !== 0) {
      return (
        <MovieList
          data={movies}
          loadingFooter={loadingMore}
          onEndReached={() => setPage((pg) => pg + 1)}
          title={search}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <ScreenContainer title="Movies Catalog" backHidden showFavourites>
      <SearchBar
        onChangeText={(text) => {
          setPage(1);
          setMovies([]);
          setSearch(text);
        }}
        value={search}
        onPressX={() => setSearch('')}
      />
      {renderMainComponent()}
    </ScreenContainer>
  );
};

export default SearchPage;
