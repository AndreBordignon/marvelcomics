import React from 'react';

import { Container, TitleEmptyList, Description, DescriptionBold } from './styles';

const EmptyList = (props) => {
  return (
      <Container>
          <TitleEmptyList>Nenhum {props.type === 'comics' ? 'quadrinho' : 'personagem'} encontrado!</TitleEmptyList>
            <Description>Não encontramos <DescriptionBold>{props.searchTerm}</DescriptionBold> em nossa pesquisa </Description>
      </Container>
  );
}

export default EmptyList;