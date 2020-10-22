import React from 'react';
import {Modal} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {withTheme} from 'styled-components';
import {darkTheme, lightTheme} from '../../constants/colors';
import {modifyFontSize, switchTheme} from '../../store/actions/themeActions';
import {
  Container,
  Box,
  Title,
  FontSizeSample,
  ButtonsContainer,
  FontAdjustButton,
  Header,
  AuxContainer,
} from './styles';

Icon.loadFont();

const AccessibilityOptions = ({isVisible, onClose, theme}) => {
  const delta = theme.delta;
  const dispatch = useDispatch();
  return (
    <Modal visible={isVisible} transparent>
      <Container>
        <Box>
          <Header>
            <AuxContainer />
            <Title>Accessibility Options</Title>
            <AuxContainer>
              <Icon
                name="close"
                size={25 + delta}
                color={theme.theme.SECONDARY_TEXT_COLOR}
                onPress={onClose}
              />
            </AuxContainer>
          </Header>
          <FontSizeSample fontSize={20 + delta}>FONT SIZE</FontSizeSample>
          <ButtonsContainer>
            <FontAdjustButton onPress={() => dispatch(modifyFontSize(-1))}>
              <Icon name="minus" size={40 + delta} color="white" />
            </FontAdjustButton>
            <FontAdjustButton onPress={() => dispatch(modifyFontSize(1))}>
              <Icon name="plus" size={40 + delta} color="white" />
            </FontAdjustButton>
          </ButtonsContainer>
          <FontSizeSample fontSize={20 + delta}>HIGH CONTRAST</FontSizeSample>
          <ButtonsContainer>
            <FontAdjustButton
              onPress={() => dispatch(switchTheme(lightTheme))}
              active={theme.theme.mode === 'light'}>
              <Icon name="close" size={39 + delta} color="white" />
            </FontAdjustButton>
            <FontAdjustButton
              onPress={() => dispatch(switchTheme(darkTheme))}
              active={theme.theme.mode === 'dark'}>
              <Icon name="check" size={40 + delta} color="white" />
            </FontAdjustButton>
          </ButtonsContainer>
        </Box>
      </Container>
    </Modal>
  );
};

export default withTheme(AccessibilityOptions);
