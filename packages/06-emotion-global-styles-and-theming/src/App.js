import styles from './App.module.scss';
import { ProfilePicture, Status } from './components';

export default function App({ character }) {
  return (
    <main>
      {character && (
        <section>
          <ProfilePicture src={character.image} alt={character.name} />
          <Status status={character.status}>{character.status}</Status>

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
