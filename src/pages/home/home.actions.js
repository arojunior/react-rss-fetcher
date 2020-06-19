import { createAction } from '../../services/redux.service';

export const ACTIONS = {
  SET_ITEMS: `HOME/SET_ITEMS`,
  SET_URL: `HOME/SET_URL`,
  SET_LOADING: `HOME/SET_LOADING`,
  SET_ERROR: `HOME/SET_ERROR`,
  SET_CURRENT_PAGE: `HOME/SET_CURRENT_PAGE`,
};

export const setItems = createAction(ACTIONS.SET_ITEMS);
export const setURL = createAction(ACTIONS.SET_URL);
export const setLoading = createAction(ACTIONS.SET_LOADING);
export const setHasError = createAction(ACTIONS.SET_ERROR);
export const setCurrentPage = createAction(ACTIONS.SET_CURRENT_PAGE);
