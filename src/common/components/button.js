import React from 'react';
import styled from 'styled-components';

const CustomButton = styled.button`
  background-color: dodgerblue;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  cursor: pointer;
`;

const Button = (props) => <CustomButton {...props} />;

export default Button;
