import React from 'react';
import { Provider } from 'react-redux';

import AppRoutes from './routes/routes';
import Theme from './shared/hooks/theme';
import { store } from './shared/store/reducer';
import GlobalStyle from './styles/global';

export default function App() {
  return (
    <Provider store={store}>
      <Theme>
        <GlobalStyle />
        <AppRoutes />
      </Theme>
    </Provider>
  );
}
