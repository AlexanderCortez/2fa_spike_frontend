import React from 'react';
import styled from 'styled-components';

export const Navbar = () => (
  <Wrapper>
    <button
      type="button"
    >
      Sign out
    </button>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
  height: 50px;
`;
