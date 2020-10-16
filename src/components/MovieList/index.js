import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {
  GET_BY_GENRES,
  GET_GENRES,
  GET_POSTER_PATH,
} from '../../constants/routes';
import RestServices from '../../services/api';
import MovieListItem from '../MovieListItem';
const Rest = new RestServices();

const MovieList = () => {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    async function getGenres() {
      const list = (await Rest.get(GET_GENRES)).data.genres;
      const genresList = [];
      let auxObj = {};
      for (const [i, genre] of list.entries()) {
        const filmsOfGenre = (await Rest.get(GET_BY_GENRES(genre.id, 1))).data
          .results;
        auxObj = {...genre};
        auxObj.posterPath = GET_POSTER_PATH(filmsOfGenre[0].poster_path);
        genresList.push(auxObj);
      }
      setGenres(genresList);
    }
    getGenres();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent: 'space-around',
      }}
      scrollEnabled>
      {/* {genres.length > 0 &&
        genres.map((item, i) => (
          <CategoryListItem
            imageSrc={item.posterPath}
            key={item.id}
            title={item.name}
          />
        ))} */}
    </ScrollView>
  );
};

export default MovieList;
