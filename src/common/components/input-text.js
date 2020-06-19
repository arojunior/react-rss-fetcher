import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
`;

const InputText = (props) => <Input type="text" {...props} />;

export default InputText;
