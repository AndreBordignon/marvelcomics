import React, {useState} from 'react';
import { Container, SearchInput, ButtonSearch, BorderBottomSearch } from './styles';
import { FontAwesome } from '@expo/vector-icons';
import { searchComics,  clearComics } from '../../store/actions';
import { useDispatch } from 'react-redux';

const SearchBar = () => {
  const [value, setValue] = useState();
  const dispatch = useDispatch();


  const handleSearch = async () => {
    await dispatch(clearComics())
    await dispatch(searchComics(value))
  }
  return (
    <Container>
        <SearchInput 
            placeholderTextColor="#000" 
            placeholder="Digite o começo do nome" 
            value={value} 
            onChangeText={(text) => setValue(text)}
            onSubmitEditing={() => handleSearch()}
        />
        <ButtonSearch title="" onPress={() => handleSearch()}>
            <FontAwesome name="search" size={16} color="#3a67d2"/>
        </ButtonSearch>
    </Container>
  );
}

export default SearchBar;