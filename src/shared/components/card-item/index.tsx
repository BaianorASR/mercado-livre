import React from 'react';

import { ProductsResults } from '../../services/api/@types';
import * as S from './styles';

export function CardItems({ product }: CardItemsProps<ProductsResults>) {
  return (
    <S.Card data-testid="product">
      <S.Image src={product.thumbnail.replace('I.jpg', 'J.jpg')} alt={product.title} />
      <S.Title>{product.title}</S.Title>
      <S.Price>
        {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRl' })}
      </S.Price>
      {product.shipping.free_shipping && <S.FreeShipping>Frete Grátis</S.FreeShipping>}
    </S.Card>
  );
}
