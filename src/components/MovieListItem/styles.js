import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 170px;
  height: 200px;
  elevation: 5;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Image = styled.Image`
  width: 100%;
  flex: 1;
`;
