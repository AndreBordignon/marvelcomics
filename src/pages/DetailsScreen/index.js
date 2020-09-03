import React, {useState, useEffect} from 'react';
import {Button, ActivityIndicator} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { fetchDetails } from '../../store/actions'
import { Container, Card, DescriptionText, AuthorName, TitleCharacter, Image } from './styles';



const Details = ({route, navigation}) => {
  const {item} = route.params;
  
  const {comicsReducer} = useSelector(store => store),
  { comicDetail, loading } = comicsReducer,
  {title, description} = comicDetail;
  
  const dispatch = useDispatch();

	useEffect(() => {
    dispatch(fetchDetails(item.id))
	}, [dispatch])
  
  navigation.setOptions({ title: title })

  const imagebg = {uri: `${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`};
  
  return(
    <>
      {loading ? (
        <ActivityIndicator size={40} color={'#e62429'} style={{flex: 1, justifyContent: 'center'}}/>
      ) : (
      <Container> 
          <Image      
          source={imagebg}   
          style={{
            flex: 1,
            width: '100%',
            margin: 10
          }}
          autoSize
          resizeMode="contain"
          borderRadius={6} />
          <Card>
              <TitleCharacter>{title}</TitleCharacter>
              <DescriptionText>{description}</DescriptionText>
              <Button onPress={() => console.tron.log(item)} title="aaa"></Button>
          </Card> 
      </Container>
      )}
    </>  
  )
}
export default Details;