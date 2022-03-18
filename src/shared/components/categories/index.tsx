/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';

import { getCategories } from '../../services/api';
import { ApiCategoriesResponse } from '../../services/api/@types';
import * as S from './styles';

export function Categories({ register }: CategoriesProps): JSX.Element {
  const [categories, setCategories] = useState<Res<ApiCategoriesResponse>>();

  useEffect(() => {
    getCategories().then(data => setCategories(data));
  }, []);

  return (
    <S.Section>
      <S.Select {...register('category')}>
        {categories?.map(each => (
          <S.Option data-testid="category" value={each.id} id={each.id} key={each.id}>
            {each.name}
          </S.Option>
        ))}
      </S.Select>
    </S.Section>
  );
}
