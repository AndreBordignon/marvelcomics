import React, {useState, useEffect, useRef} from 'react';
import { FlatList, ActivityIndicator} from 'react-native';
import CharactersItem from './CharactersItem';
import { getAllCharacters } from './api';
import { Container } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { addComics } from '../../store/actions';
import EmptyList from '../EmptyList';

function CharactersList ({navigation, item}){
	const [loading, setLoading] = useState(true)
	const [page, setPage] = useState(1)
	const {data, searchTerm, searchType} = useSelector(state => state.comics);
  const dispatch = useDispatch();
  let isRendered = useRef(false);
	useEffect(() => {
		isRendered = true;
		loadItems();
	}, [searchType, searchTerm, page]);

	useEffect(() => {
		setPage(1);
	}, [searchTerm]);
		
	const loadItems = async () => {
		try{
			setLoading(true)
			const options = { page: page, limit: 10};
			
			const offset = options.page === 1 ? 0 : (options.limit * (options.page - 1));
			const response = await getAllCharacters(searchTerm, options.limit, offset),
			{results} = response;
			await dispatch(addComics(results))
			setLoading(false)
		}
		catch{
			(error) => console.warn.log(error)
		}
	}

	const loadMore = async () => {
		if(!loading){
			setPage(page + 1)
		}
	}

	const renderFooter = () => {
		 if (!loading) return null;
		 return (
			 <ActivityIndicator
			 	color="red"
				style={{ margin: 30 }}
			 />
		 );
   };

  const renderItem = ({item}) => {
		return (
			<CharactersItem 
				item={item} 
				navigation={navigation} 
				title={item.name} 
				thumbnail={item.thumbnail}
			/>
		);
	}
  return (
    <Container>
      <FlatList
        data={data}
        bounces={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        initialNumToRender={10}
		refreshing={loading}
        numColumns={2}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={() => !loading && <EmptyList type={searchType} searchTerm={searchTerm}/>}
        onMomentumScrollEnd={() => loadMore()}
        onEndReachedThreshold={0.5}
      />
    </Container>	
  );
}

export default CharactersList;