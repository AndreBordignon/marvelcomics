import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const AuthorsList = styled.SectionList`

`;

export const Card = styled.View`
  background-color: #fff;
  border: 1px solid #e62429;
  border-radius: 8px;
  margin: 5px;
`;
export const Button = styled.TouchableHighlight`
  flex: 1;
  padding: 10px;
  border-radius: 6px;
  background-color: #e62429;
`;
export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  text-align: center;
`;
export const Image = styled.Image`
  margin: 15px 0;
`;

export const AuthorName = styled.Text`
  color: #fff;
`;
export const TitleCharacter = styled.Text`
  color: #000;
  text-align: center;
  font-size: 14px;
  min-height: 40px;
  margin: 10px;
`;