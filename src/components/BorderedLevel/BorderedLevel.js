import React from 'react';
import styled from 'styled-components';

const Level = styled.div`
    padding-bottom: 10px;
    border-bottom: 1px solid #3636;
`;

const BorderedLevel = ({ children }) => (
  <Level className='level'>
      {children}
  </Level>
);

export default BorderedLevel;
