import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../constants';
import {Container, Input} from './styles';
Icon.loadFont();
const SearchBar = () => {
  return (
    <Container>
      <Icon name="search" size={25} color={colors.medium} />
      <Input placeholder={'Search a movie by name'} />
    </Container>
  );
};

export default SearchBar;
