/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import styles from './App.module.scss';

const profilePictureStyles = css`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

const statusStyles = (status) => css`
  padding: 8px 16px;
  text-align: center;
  color: white;
  font-weight: bold;
  background-color: ${status === 'Alive' ? 'lightgreen' : 'lightcoral'};
  border-radius: 12px;
`;

export default function App({ character }) {
  return (
    <main>
      {character && (
        <section>
          <img
            css={profilePictureStyles}
            src={character.image}
            alt={character.name}
          />

          <span css={statusStyles(character.status)}>{character.status}</span>

          <span className={styles.name}>{character.name}</span>
          <span className={styles.species}>{character.species}</span>
          <span>In {character.episode.length} episodes</span>

          <div className={styles.location}>
            <div>
              <span className={styles.locationTitle}>Origin</span>
              <span>{character.origin.name}</span>
            </div>
            <div>
              <span className={styles.locationTitle}>Lives</span>
              <span>{character.location.name}</span>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
