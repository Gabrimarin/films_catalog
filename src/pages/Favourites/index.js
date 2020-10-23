import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {MovieList, ScreenContainer} from '../../components';
import RestServices from '../../services/api';
import {Store} from '../../store';
import {processApiMovieList} from '../../utils/processData';
import {useFocusEffect} from '@react-navigation/native';

const Rest = new RestServices();
const Favourites = () => {
  const firstIds = useSelector((state) => state.favouritesState.idList);
  const [movies, setMovies] = useState([]);
  const [idList, setIdList] = useState(firstIds);

  Store.subscribe(() => {
    setIdList(Store.getState().favouritesState.idList);
  });

  const getMovies = async (ids) => {
    const apiMovies = [];
    for (let i = 0; i < ids.length; i++) {
      const movie = await Rest.getMovie(ids[i]);
      apiMovies.push(movie);
    }
    const processedList = processApiMovieList(apiMovies);
    return processedList;
  };

  useFocusEffect(
    React.useCallback(() => {
      getMovies(idList).then((list) => setMovies(list));
    }, [idList]),
  );

  return (
    <ScreenContainer title="Favourite Movies">
      <MovieList data={movies} onEndReached={() => {}} loadingFooter={false} />
    </ScreenContainer>
  );
};

export default Favourites;
