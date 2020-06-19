import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  padding: 20px;
  background-color: ${({ color }) => color};
  color: white;
  margin: 15px;
`;

const CloseButton = styled.span`
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    color: black;
  }
`;

const getColorByType = (type) => {
  const COLORS = {
    error: '#f44336',
    success: '#4CAF50',
    warning: `#2196F3`
  };

  return COLORS[type] || COLORS.warning;
};

const AlertBox = ({ children, handleClose, type = 'warning' }) => {
  return (
    <Box color={getColorByType(type)}>
      <CloseButton onClick={handleClose}>&times;</CloseButton>
      {children}
    </Box>
  );
};

export default AlertBox;
