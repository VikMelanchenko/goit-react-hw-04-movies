import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
// Import a couple of SVG files we'll use in the design: https://www.flaticon.com
import { ReactComponent as MoonIcon } from '../../icons/moon-1.svg';
import { ReactComponent as SunIcon } from '../../icons/sun-1.svg';

const ToggleContainer = styled.button`
  display: block;
  background: ${({ theme }) => theme.gradient};
  width: 8rem;
  height: 3.5rem;
  margin: 0 auto;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  font-size: 0.5rem;
  padding: 0.5rem;
  overflow: hidden;
  cursor: pointer;

  svg {
    width: 2.5rem;
    height: auto;
    transition: all 0.3s linear;
    &:first-child {
      transform: ${({ lightTheme }) =>
        lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }
    &:nth-child(2) {
      transform: ${({ lightTheme }) =>
        lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
