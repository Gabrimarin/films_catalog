import React from 'react';
import {View} from 'react-native';

import {Container, Input} from './styles';

const SearchBar = () => {
  return (
    <Container>
      <Input placeholder={'Search a movie by name'} />
    </Container>
  );
};

export default SearchBar;
