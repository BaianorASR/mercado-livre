import * as api from '../../shared/services/api';
import mockedCategoriesResult from '../__mocks__/categories';
import mockFetch from '../__mocks__/mockFetch';

describe('1 - Implemente o módulo de acesso à api do Mercado Livre', () => {
  afterEach(() => {
    global.fetch.mockClear();
  });

  it('Implementa a função `getCategories`', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch);

    const categories = await api.getCategories();
    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.mercadolibre.com/sites/MLB/categories');
    expect(categories).toEqual(mockedCategoriesResult);
  });

  it('Implementa a função `getProductsFromCategoryAndQuery`', async () => {
    const categoryId = 'category1';
    const query = 'my-query';
    const successResponseBody = {};

    const mockFetchPromise = Promise.resolve({
      json: () => Promise.resolve(successResponseBody),
    });

    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    const products = await api.getProductsFromCategoryAndQuery(categoryId, query)
      expect(global.fetch).toHaveBeenCalled();
      expect(products).toEqual(successResponseBody);
  });
});
