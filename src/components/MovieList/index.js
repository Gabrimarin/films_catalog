import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import ListFooter from '../ListFooter';
import MovieListItem from '../MovieListItem';

const MovieList = ({data, onEndReached, loadingFooter}) => {
  const navigation = useNavigation();
  const favouritesList = useSelector((store) => store.favouritesState.idList);

  const renderItem = ({item}) => (
    <MovieListItem
      isFavourite={favouritesList.indexOf(item.movieId) !== -1}
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
    <FlatList
      columnWrapperStyle={{justifyContent: 'space-around', marginTop: 10}}
      key={'#'}
      data={data}
      numColumns={2}
      renderItem={renderItem}
      keyExtractor={(item) => item.movieId.toString()}
      onEndReached={() => onEndReached()}
      ListFooterComponent={<ListFooter loading={loadingFooter} />}
      onEndReachedThreshold={0.1}
    />
  );
};

export default MovieList;
