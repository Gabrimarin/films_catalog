import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {withTheme} from 'styled-components';
import {Container, Input} from './styles';

Icon.loadFont();
const SearchBar = ({value, onChangeText, onPressX, theme}) => {
  return (
    <Container>
      <Icon
        name="search"
        size={25 + theme.delta}
        accessibilityLabel="Search Icon"
        color={theme.theme.PRIMARY_TEXT_COLOR}
      />
      <Input
        placeholder={'Search a movie by name'}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        placeholderTextColor={theme.theme.SECONDARY_BACKGROUND_COLOR_LIGHT}
        numberOfLines={1}
      />
      <Icon
        name="close"
        size={25 + theme.delta}
        color={theme.theme.PRIMARY_TEXT_COLOR}
        onPress={() => onPressX()}
        accessibilityLabel="Erase text"
        accessibilityHint="Makes the search box empty"
      />
    </Container>
  );
};

export default withTheme(SearchBar);
