import styled from 'styled-components/native';
import {colors} from '../../constants';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
  background-color: #eee;
  elevation: 5;
`;

export const Input = styled.TextInput`
  font-size: 20px;
  font-weight: bold;
  flex: 1;
  color: ${colors.medium};
`;
