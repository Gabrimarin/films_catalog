import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView} from 'react-native';
import {
  GET_BY_GENRES,
  GET_GENRES,
  GET_POSTER_PATH,
} from '../../constants/routes';
import RestServices from '../../services/api';
import CategoryListItem from '../CategoryListItem';
import ScreenContainer from '../ScreenContainer';
import SearchBar from '../SearchBar';
const Rest = new RestServices();
const CategoryList = () => {
  const [genres, setGenres] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function getGenres() {
      const list = (await Rest.get(GET_GENRES)).data.genres;
      const paths = [];
      const genresList = [];
      let auxObj = {};
      for (const [_, genre] of list.entries()) {
        const filmsOfGenre = (await Rest.get(GET_BY_GENRES(genre.id, 1))).data
          .results;
        auxObj = {...genre};
        let i = 0;
        while (paths.indexOf(filmsOfGenre[i].poster_path) !== -1) {
          i += 1;
        }
        auxObj.posterPath = GET_POSTER_PATH(filmsOfGenre[i].poster_path);
        paths.push(filmsOfGenre[i].poster_path);
        genresList.push(auxObj);
      }
      setGenres(genresList);
    }
    getGenres();
  }, []);

  const renderItem = ({item}) => (
    <CategoryListItem
      imageSrc={item.posterPath}
      key={item.id}
      title={item.name}
      navigation={navigation}
      onPress={() =>
        navigation.navigate('MovieList', {
          genreId: item.id,
          origin: 'category',
        })
      }
    />
  );

  return (
    <ScreenContainer>
      <SearchBar />
      {genres.length > 0 && (
        <FlatList
          data={genres}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </ScreenContainer>
  );
};

export default CategoryList;
