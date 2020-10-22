import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding-horizontal: 15px;
  background-color: ${(props) =>
    props.theme.theme.PRIMARY_BACKGROUND_COLOR_LIGHT};
  elevation: 5;
  margin-horizontal: 5px;
  margin-top: 10px;
`;

export const Input = styled.TextInput`
  font-size: ${(props) => 20 + props.theme.delta}px;
  font-weight: bold;
  flex: 1;
  color: ${(props) => props.theme.theme.PRIMARY_TEXT_COLOR};
`;
