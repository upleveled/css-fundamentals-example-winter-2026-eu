export default function App({ character }) {
  return (
    <main>
      {character && (
        <section>
          <img src={character.image} alt={character.name} />
          <span>{character.status}</span>

          <span>{character.name}</span>
          <span>{character.species}</span>
          <span>In {character.episode.length} episodes</span>

          <div>
            <div>
              <span>Origin</span>
              <span>{character.origin.name}</span>
            </div>
            <div>
              <span>Lives</span>
              <span>{character.location.name}</span>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
