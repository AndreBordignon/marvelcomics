import React, {useState} from 'react';
import { 
  Container,
  ButtonCheckBox,
  SearchInput, 
  ButtonSearch, 
  FilterContainer, 
  TypeSearch, 
  SelectedSearch, 
  SearchItem } 
from './styles';
import { FontAwesome } from '@expo/vector-icons';
import { searchComics, searchType, clearComics } from '../../store/actions';
import { useDispatch } from 'react-redux';

const SearchBar = () => {
  const [value, setValue] = useState();
  const [open, setOpen] = useState(false);
  const [search, setSearchType] = useState('comics');
  const dispatch = useDispatch();


  const options = [
    {
      id: 1,
      title: 'comics'
    },
    {
      id: 2,
      title: 'characters'
    }
  ]
  const handleSearch = async () => {
    await dispatch(clearComics())
    await dispatch(searchComics(value))
  }
  const changeSearchType = async (title) => {
    dispatch(searchType(title))
    handleSearch();
  }
  return (
    <>

      <Container>
          <SearchInput 
              placeholderTextColor="#000" 
              placeholder="Digite o começo do nome" 
              value={value} 
              onChangeText={(text) => setValue(text)}
              onSubmitEditing={() => handleSearch()}
          />
          <ButtonSearch  onPress={() => handleSearch()}>
              <FontAwesome name="search" size={16} color="#3a67d2"/>
          </ButtonSearch>

          <ButtonSearch  onPress={() => setOpen(!open)}>
              <FontAwesome name="filter" size={16} color="#3a67d2"/>
          </ButtonSearch>
      </Container>


      <FilterContainer open={open}>
          {options.map((item) => {
            return (
              <ButtonCheckBox key={item.title} onPress={() => 
                {
                  changeSearchType(item.title),
                  setSearchType(item.title)
                }
            
              }>
                <TypeSearch>
                  {item.title == search && <SelectedSearch />}
                </TypeSearch>
                <SearchItem>{item.title}</SearchItem>
              </ButtonCheckBox>
            )
          })}
      </FilterContainer>
    </>
  );
}

export default SearchBar;