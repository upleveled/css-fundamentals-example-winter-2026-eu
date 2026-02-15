import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ProfilePicture = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

export const Status = styled.span`
  padding: 8px 16px;
  text-align: center;
  color: white;
  font-weight: bold;
  background-color: ${(props) => {
    return props.status === 'Alive' ? 'lightgreen' : 'lightcoral';
  }};
  border-radius: 12px;
`;

// Global styles
export const globalStyles = (theme) => css`
  :root {
    --font-family:
      -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --primary-color: darkBlue;
  }

  /* html elements type selectors can still be accessed */
  body {
    background-color: ${theme.textColor};
    font-family: var(--font-family);
    margin: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
