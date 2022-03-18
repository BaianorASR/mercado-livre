import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import dark from '../../../styles/themes/dark';
import light from '../../../styles/themes/light';
import { RootState } from '../../store/reducer';
import { getStorageTheme } from '../../utils/storage/theme';

type ThemeProps = {
  children: React.ReactNode;
};

export default function Theme({ children }: ThemeProps) {
  const { dark_theme } = useSelector((state: RootState) => state.theme);
  const [loadTheme, setLoadTheme] = useState(false);

  useEffect(() => {
    getStorageTheme();
    setLoadTheme(true);
  }, []);

  return (
    loadTheme && (
      <ThemeProvider theme={dark_theme ? dark : light}>{children}</ThemeProvider>
    )
  );
}
