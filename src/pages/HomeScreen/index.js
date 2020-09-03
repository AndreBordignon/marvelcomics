import React, {useState, useEffect} from 'react';
import { FlatList} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { fetchComics } from '../../store/actions'
import { Container, Card, Button, AuthorName, TitleCharacter, Image } from './styles';



const HomeScreen = ({navigation}) => {
	const [page, setPage] = useState(1);
	const {comicsReducer} = useSelector(store => store),
	{ items } = comicsReducer || {};


	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchComics())
	}, [page])

	const loadMore = () => {
		setPage(page + 1);

		let initialOptions = {
			page
		}
	}

	function renderItem ({item}){
		const imagebg = {uri: `${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`};
		
		actionButton = async (item) => {
			navigation.navigate('Details', {item})
		}
		return (
			<Container>
				<Card>
					<Image           
					style={{
						flex: 1,
						width: '100%',
						height: 200
					}}
					autoSize
					resizeMode="cover" 
					source={imagebg}
					borderRadius={6}
					/>
					<TitleCharacter numberOfLines={1} ellipsizeMode='tail'>{item.title}</TitleCharacter>
					<Button color={'#3a67d2'} style={{flex: 1, alignSelf: 'left', padding: 20}} onPress={() => actionButton(item)} title="Detalhes"/>
				</Card>
			</Container> 
			
		);
	}

  return (
  <Container>
			<FlatList
				data={items}
				keyExtractor={(item) => item.id.toString()}
				renderItem={renderItem}
				numColumns={2}
				onEndReachedThreshold={0.4}
				onEndReached={() => loadMore(page)}
			/>
  </Container>);
}
export default HomeScreen;