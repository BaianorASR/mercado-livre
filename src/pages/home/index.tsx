import React from 'react';
import { useSelector } from 'react-redux';

import { CardItems, Header } from '../../shared';
import { RootState } from '../../shared/store/reducer';
import * as S from './styles';

export function Home() {
  const { items } = useSelector((state: RootState) => state.products);
  return (
    <S.HomePage className="Homepage">
      <Header />
      <S.H2 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </S.H2>
      <S.Main>
        {items.results?.map(each => (
          <CardItems key={each.id} product={each} />
        ))}
      </S.Main>
    </S.HomePage>
  );
}
