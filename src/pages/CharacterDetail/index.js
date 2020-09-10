import React, {useState, useEffect} from 'react';
import { ActivityIndicator} from 'react-native';
import { getCharactersDetails } from './api'
import { Container, Card, DescriptionText, Button, AuthorName, TitleCharacter, Image } from './styles';


const CharacterDetail = ({route, navigation}) => {
  const id = route.params.id;
	const [comicDetail, setDetail] = useState({})
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getDetails();
  }, [])

  const getDetails = async () => {
    const data = await getCharactersDetails(id),
    {results} = data;
    setDetail(results[0]);
    setLoading(false);
  }

  const {title, description, thumbnail, creators} = comicDetail;
  const imagebg = loading ? '' : `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`;

  return(
    <>
      {loading ? (
        <ActivityIndicator size={40} color={'#e62429'} style={{flex: 1, justifyContent: 'center'}}/>
      ) : (
      <Container
        contentContainerStyle={{padding: 20, alignItems: 'center'}}
      >
        <Image      
          source={{uri: imagebg}}   
          style={{
            flex: 1,
            width: '100%',
            height: 400,
            marginBottom: 15,
          }}
          autoSize
          resizeMode="contain"
          borderRadius={6} /> 
          <TitleCharacter>{title}</TitleCharacter>
          <DescriptionText>{description}</DescriptionText>
      </Container>
      )}
    </>  
  )
}
export default CharacterDetail;