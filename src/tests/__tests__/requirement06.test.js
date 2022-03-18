import '@testing-library/jest-dom/extend-expect';

import { fireEvent, render, screen, userEvent, waitFor } from '@testing-library/react';
import React from 'react';

import App from '../../App';
import mockFetch from '../__mocks__/mockFetch';
import mockedQueryResult from '../__mocks__/query';

describe('6 - Selecione uma categoria e mostre somente os produtos daquela categoria', () => {
  it(`Filtra corretamente os produtos de uma página para exibir somente os daquela
      categoria`, async () => {

    jest.spyOn(global, 'fetch').mockImplementation(mockFetch);
    render(<App />);
    await waitFor(() => expect(global.fetch).toHaveBeenCalled());
    fireEvent.click(screen.getByRole('combobox'));
    fireEvent.click(screen.getAllByTestId('category')[0]);
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(2));
    expect(screen.getAllByTestId('product').length).toEqual(
      mockedQueryResult.results.length,
    );
  });
});
