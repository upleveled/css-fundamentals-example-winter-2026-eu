import { css, Global } from '@emotion/react';
import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

function Home() {
  const [character, setCharacter] = useState();

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/2')
      .then((response) => response.json())
      .then((characterJson) => setCharacter(characterJson));
  }, []);

  return <App character={character} />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Global
      styles={css`
        :root {
          --font-family:
            -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
            Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          --primary-color: darkBlue;
        }

        /* html elements type selectors can still be accessed */
        body {
          background-color: lightblue;
          font-family: var(--font-family);
          margin: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}
    />
    <Home />
  </StrictMode>,
);
