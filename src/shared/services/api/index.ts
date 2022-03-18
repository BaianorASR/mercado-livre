import { InitialQueryState } from '../../store/actions/types/query';
import { ApiCategoriesResponse, ApiProductsResponse } from './@types';

export const getCategories = (): Promise<ApiCategoriesResponse> =>
  fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then(response => response.json())
    .then(data => data);

export const getProductsFromCategoryAndQuery = ({ category, query }: InitialQueryState) =>
  fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${category}&q=${query}`)
    .then(response => response.json())
    .then(data => data);

export const getProductsById = (id: string): Promise<ApiProductsResponse> =>
  fetch(`https://api.mercadolibre.com/items/${id}`)
    .then(response => response.json())
    .then(data => data);
