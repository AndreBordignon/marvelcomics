import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  max-height: 50px;
  background-color: transparent;
  margin: 10px 5px;
  border-radius: 8px;
  border-bottom-width: 1px;
  border-style: solid;
  border-bottom-color: #4e4e4e;
`;
export const SearchInput = styled.TextInput`
    flex: 8;
    height: 50px;
    color: #000;
    padding: 0 5px;
    justify-content: center;
    align-items: center;
`;
export const ButtonSearch = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    justify-content: center;
    background-color: transparent;
    border-radius: 6px;
    align-items: center;
`;
export const BorderBottomSearch = styled.View`
flex: 1;
flex-direction: row;
  height: 2px;
  width: 100%;
  background-color: #4e4e4e;
`

export const FilterContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  max-height: ${props => props.open ? "70px" : "0px"};
  overflow: ${props => props.open ? 'hidden' : 'hidden'};
  background-color: transparent;
`;
export const ButtonCheckBox = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-self: center;
  justify-content: center;
`;

export const TypeSearch = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border: 2px solid #e62429
  padding: 10px;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;
export const SearchItem = styled.Text`
  font-size: 16px;
  color: #e62429;
  font-weight: bold;
`;
export const SelectedSearch = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 5px;
  background-color: #e62429;
  justify-content: center;
  align-items: center;
`;