import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { BsCart } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';

import { getProductsFromCategoryAndQuery } from '../../services/api';
import { actionProducts } from '../../store/actions/products.action';
import { actionQuery } from '../../store/actions/query.action';
import { RootState } from '../../store/reducer';
import { setStorageTheme } from '../../utils/storage/theme';
import { Categories } from '../categories';
import * as S from './styles';

/* eslint-disable react/jsx-props-no-spreading */
export function Header() {
  const { register, watch } = useForm();
  const dispatch = useDispatch();
  const {
    query,
    theme: { dark_theme },
  } = useSelector((state: RootState) => state);

  useEffect(() => {
    const subscription = watch(data => dispatch(actionQuery(data)));
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = (event?: React.FormEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    if (!query.category && !query.query) return;
    getProductsFromCategoryAndQuery(query).then(data => dispatch(actionProducts(data)));
  };

  useEffect(() => {
    console.log('BAIANOR');
    onSubmit();
  }, [watch('category')]);

  return (
    <S.Header>
      <S.Form>
        <label htmlFor="query">
          <input
            {...register('query')}
            data-testid="query-input"
            id="query"
            type="text"
          />
        </label>
        <Categories register={register} />
        <button onClick={onSubmit} data-testid="query-button" type="submit">
          Buscar
        </button>
      </S.Form>
      <Switch
        onChange={setStorageTheme}
        checked={dark_theme}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={35}
        onColor="#fff"
        handleDiameter={15}
      />
      <Link data-testid="shopping-cart-button" to="/cart">
        <BsCart />
      </Link>
    </S.Header>
  );
}
