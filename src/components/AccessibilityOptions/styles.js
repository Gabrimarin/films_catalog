import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  background: #000000aa;
`;

export const Box = styled.ScrollView.attrs((props) => {
  return {
    contentContainerStyle: {
      backgroundColor: `${props.theme.theme.PRIMARY_BACKGROUND_COLOR}`,
      alignSelf: 'center',
      margin: 'auto',
      width: '90%',
    },
  };
})`
  flex-direction: row;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: ${(props) => 25 + props.theme.delta}px;
  text-align: center;
  font-weight: bold;
  flex: 5;
  color: ${(props) => props.theme.theme.SECONDARY_TEXT_COLOR};
`;

export const FontSizeSample = styled.Text`
  align-self: center;
  text-align: center;
  font-size: ${({fontSize}) => fontSize}px;
  font-weight: bold;
  color: ${(props) => props.theme.theme.PRIMARY_TEXT_COLOR};
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  height: 50px;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 15px;
  width: 160px;
`;

export const FontAdjustButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex: 1;
  border-width: 3px;
  border-color: #017374;
  border-radius: 100px;
  align-items: center;
  height: 100%;
  justify-content: center;
  background-color: ${(props) =>
    props.active ? '#017374' : props.theme.theme.SECONDARY_BACKGROUND_COLOR};
`;

export const Header = styled.View`
  background: ${(props) => props.theme.theme.SECONDARY_BACKGROUND_COLOR};
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

export const AuxContainer = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: center;
  margin-top: 5px;
`;
