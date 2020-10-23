import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import RestServices from '../../services/api';
import {
  CategoryList,
  LoadingComponent,
  ScreenContainer,
} from '../../components';
import {processApiGenreData} from '../../utils/processData';

const Rest = new RestServices();

const Genres = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleError = (response) => {
    setLoading(false);
    setHasError(true);
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
    } else {
      return <CategoryList data={genres} />;
    }
  };

  return (
    <ScreenContainer title="Movies Catalog" backHidden>
      {renderMainComponent()}
    </ScreenContainer>
  );
};

export default Genres;
