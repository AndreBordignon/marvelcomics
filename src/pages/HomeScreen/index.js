import React, {useState, useEffect} from 'react';
import { FlatList, ActivityIndicator} from 'react-native';
import ComicItem from '../../components/ComicsList'
import SearchBar from '../../components/SearchBar'
import { getAllCharacters } from './api'
import { Container} from './styles';
import { useSelector, useDispatch } from 'react-redux'
import { addComics } from '../../store/actions';



const HomeScreen = ({navigation}) => {
	const [loading, setLoading] = useState(true)
	const [page, setPage] = useState(1)
	const {data, searchTerm} = useSelector(state => state.comics);
	const dispatch = useDispatch();

	useEffect(() => {
		loadItems();
	}, [searchTerm, page]);
		
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
			<ComicItem 
				item={item} 
				navigation={navigation} 
				title={item.title} 
				thumbnail={item.thumbnail}
			/>
		);
	}
  return (
	<>
		{loading && page === 1 ? (
			<ActivityIndicator />
		) : (
			<>
				<SearchBar />
				<Container>
					<FlatList
						data={data}
						bounces={false}
						renderItem={renderItem}
						keyExtractor={(item) => String(item.id)}
						initialNumToRender={10}
						refreshing={loading}
						numColumns={2}
						ListFooterComponent={renderFooter}
						onMomentumScrollEnd={() => loadMore()}
						onEndReachedThreshold={0.5}
					/>
				</Container>	
			</>
		)}
	</>
  );
}
export default HomeScreen;