import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import RestServices from '../../services/api';
import {
  CategoryList,
  LoadingComponent,
  MovieList,
  ScreenContainer,
  SearchBar,
} from '../../components';
import {processApiGenreData} from '../../utils/processData';

const Rest = new RestServices();

const Genres = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [search, setSearch] = useState('');

  const handleError = (response) => {
    setLoading(false);
    setHasError(true);
    console.log(response);
  };

  useEffect(() => {
    async function getGenres() {
      setLoading(true);
      setHasError(false);
      const response = await Rest.getGenresList();
      const genresList = await processApiGenreData(response);
      if (genresList.has_error) {
        handleError(response);
        return;
      }
      setGenres(genresList);
      setLoading(false);
    }
    getGenres();
  }, []);

  const renderMainComponent = () => {
    if (loading) {
      return <LoadingComponent />;
    } else if (hasError) {
      return <Text>Error</Text>;
    } else if (search.length !== 0) {
      const Component = () => <MovieList title={search} />;
      return <Component />;
    } else {
      return <CategoryList data={genres} />;
    }
  };

  return (
    <ScreenContainer title="Movies Catalog" backHidden showFavourites>
      {!loading && (
        <SearchBar
          onChangeText={setSearch}
          value={search}
          onPressX={() => setSearch('')}
        />
      )}
      {renderMainComponent()}
    </ScreenContainer>
  );
};

export default Genres;
