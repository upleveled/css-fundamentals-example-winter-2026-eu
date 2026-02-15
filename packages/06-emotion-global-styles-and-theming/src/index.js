import { Global, ThemeProvider } from '@emotion/react';
import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { globalStyles } from './components';
import { lightTheme } from './theme';

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
    <ThemeProvider theme={lightTheme}>
      <Global styles={globalStyles} />
      <Home />
    </ThemeProvider>
  </StrictMode>,
);
