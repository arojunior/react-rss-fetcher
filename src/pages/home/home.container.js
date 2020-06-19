import React, { useReducer } from 'react';
import { getRSSContent } from './../../services/rss.service';
import { usePagination } from '../../services/pagination.service';
import homeReducer, { initialState } from './home.reducer';
import {
  setItems,
  setLoading,
  setURL,
  setCurrentPage,
  setHasError,
} from './home.actions';

const HomeContainer = ({ Component }) => {
  const [state, dispatch] = useReducer(homeReducer, initialState);
  const { pageNumbers, pageItems } = usePagination({
    items: state.items,
    currentPage: state.currentPage,
    pageSize: 4,
  });

  const handleClickFetch = () => {
    dispatch(setItems([]));
    dispatch(setCurrentPage(1));
    dispatch(setLoading(true));

    return getRSSContent(state.url)
      .then((items) => {
        dispatch(setLoading(false));
        dispatch(setItems(items));
      })
      .catch((error) => {
        dispatch(setLoading(false));
        dispatch(setItems([]));
        dispatch(setHasError(true));
        console.log(error);
      });
  };

  const handleChangeURL = (event) => {
    if (state.hasError) dispatch(setHasError(false));
    dispatch(setURL(event.currentTarget.value));
  };

  const handleCloseError = () => {
    dispatch(setHasError(false));
  };

  const handleChangePage = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  return (
    <Component
      state={state}
      items={pageItems}
      pages={pageNumbers}
      handleCloseError={handleCloseError}
      handleChangePage={handleChangePage}
      handleClickFetch={handleClickFetch}
      handleChangeURL={handleChangeURL}
    />
  );
};

export default HomeContainer;
