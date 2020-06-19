import React from 'react';
import styled from 'styled-components';

const Spinner = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid dodgerblue;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => <Spinner />;

export default Loader;
