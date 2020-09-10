import React, {useEffect} from 'react';
import ComicsList from '../../components/ComicsList'
import CharactersList from '../../components/CharactersList'
import SearchBar from '../../components/SearchBar'
import { useSelector, useDispatch } from 'react-redux'
import {clearComics} from '../../store/actions'


const HomeScreen = ({navigation}) => {
	const {searchType, searchTerm} = useSelector(state => state.comics);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(clearComics())
	}, [searchType, searchTerm])
	
  return (
	<>
		<SearchBar />
		<>
			{searchType == 'comics' ? (
				<ComicsList navigation={navigation}/>
			) : (
				<CharactersList navigation={navigation} />
			)}
		</>
	</>
  );
}
export default HomeScreen;