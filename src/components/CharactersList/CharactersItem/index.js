import React from 'react';
import { Container, Card, ButtonText, TitleCharacter, Image , Button} from './styles';

function CharactersItem ({navigation, item, title, thumbnail}){

  actionButton = async (id) => {
    navigation.navigate('CharacterDetail', {id: id})
  }
  const imagebg = thumbnail ? {uri: `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`} : ''
  return (
    <Container>
      <Card>
        <Image           
        style={{
          flex: 1,
          width: '100%',
          height: 180,
        }}
        autoSize
        resizeMode="contain" 
        source={imagebg}
        borderRadius={6}
        />
        <TitleCharacter numberOfLines={2} ellipsizeMode='tail'>{title}</TitleCharacter>
        <Button onPress={() => actionButton(item.id)}>
          <ButtonText>+ Detalhes</ButtonText>
        </Button>
      </Card>
    </Container> 
    
  );
}

export default CharactersItem;