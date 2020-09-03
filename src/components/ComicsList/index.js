import React from 'react';
import { Container, Card, Thumbnail, AuthorName, TitleCharacter, Image } from './styles';

const ComicsList = () => {
  return (
  <Container>
    <Card>
        <Thumbnail>Captain Marvel</Thumbnail>
        <AuthorName>Captain Marvel</AuthorName>
        <Image>Captain Marvel</Image>
        <TitleCharacter>Captain Marvel</TitleCharacter>
    </Card>
  </Container>);
}

export default ComicsList;