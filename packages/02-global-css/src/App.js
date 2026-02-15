import './styles.css';

export default function App({ character }) {
  return (
    <main>
      {character && (
        <section>
          <img
            src={character.image}
            alt={character.name}
            className="profilepicture"
          />
          <span
            className={`status ${
              character.status === 'Alive' ? 'alive' : 'dead'
            }`}
          >
            {character.status}
          </span>

          <span className="name">{character.name}</span>
          <span className="species">{character.species}</span>
          <span>In {character.episode.length} episodes</span>

          <div className="location">
            <div>
              <span className="locationTitle">Origin</span>
              <span>{character.origin.name}</span>
            </div>
            <div>
              <span className="locationTitle">Lives</span>
              <span>{character.location.name}</span>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
