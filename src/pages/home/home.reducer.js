import { ACTIONS } from './home.actions';

export const initialState = {
  items: [],
  url: ``,
  currentPage: 1,
  hasError: false,
  isLoading: false,
};

const homeReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_ITEMS:
      return { ...state, items: payload };
    case ACTIONS.SET_URL:
      return { ...state, url: payload };
    case ACTIONS.SET_LOADING:
      return { ...state, isLoading: payload };
    case ACTIONS.SET_ERROR:
      return { ...state, hasError: payload };
    case ACTIONS.SET_CURRENT_PAGE:
      return { ...state, currentPage: payload };
    default:
      throw Error(`action-not-found`);
  }
};

export default homeReducer;
