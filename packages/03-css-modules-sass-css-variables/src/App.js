import styles from './App.module.scss';

export default function App({ character }) {
  return (
    <main>
      {character && (
        <section>
          <img
            src={character.image}
            alt={character.name}
            className={styles.profilePicture}
          />
          <span
            className={`${styles.status} ${
              character.status === 'Alive' ? styles.alive : styles.dead
            }`}
          >
            {character.status}
          </span>

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
