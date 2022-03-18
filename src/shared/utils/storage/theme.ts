import { setToggleChecked } from '../../store/actions/theme.action';
import { store } from '../../store/reducer';

export const getStorageTheme = () => {
  const { dispatch } = store;
  const storage = localStorage.getItem('dark_theme');
  if (storage) dispatch(setToggleChecked(JSON.parse(storage)));
};

export const setStorageTheme = () => {
  const { dispatch, getState } = store;
  const { dark_theme } = getState().theme;
  dispatch(setToggleChecked(!dark_theme));
  localStorage.setItem('dark_theme', JSON.stringify(!dark_theme));
};
