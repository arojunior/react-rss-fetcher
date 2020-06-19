import React from 'react';
import styled from 'styled-components';
import { ELLIPSIS } from '../../services/pagination.service';

const PagesWrapper = styled.div`
  a:hover:not(.active) {
    background-color: #ddd;
  }
`;

const Page = styled.button`
  color: black;
  float: left;
  padding: 8px 16px;  
  text-decoration: none;
  transition: background-color 0.3s;
  background-color: ${({ current }) => current && `dodgerblue`};
  color: ${({ current }) => current && `white`};
`;

const Pagination = ({ pages, currentPage, handleChangePage }) => (
  <PagesWrapper>
    {pages.map((item, index) => (
      <Page
        key={`${item}-${index}`}
        type="button"
        disabled={item === ELLIPSIS}
        onClick={() => handleChangePage(item)}
        current={currentPage === item}
      >
        {item}
      </Page>
    ))}
  </PagesWrapper>
);

export default Pagination;
