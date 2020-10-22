import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {HEADER_HEIGHT} from '../../constants';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.theme.SECONDARY_BACKGROUND_COLOR};
  width: ${Dimensions.get('window').width}px;
  min-height: 70px;
  elevation: 10;
`;

export const AuxContainer = styled.View`
  flex: ${({flex}) => flex};
  flex-direction: row;
  justify-content: center;
`;

export const Title = styled.Text`
  margin: auto;
  align-self: center;
  text-align: center;
  font-size: ${(props) => 25 + props.theme.delta}px;
  font-weight: bold;
  color: ${(props) => props.theme.theme.SECONDARY_TEXT_COLOR};
`;
