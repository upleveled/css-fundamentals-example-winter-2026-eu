const CHARACTER_URL = "https://rickandmortyapi.com/api/character/2";

async function getCharacter() {
  const res = await fetch(CHARACTER_URL, {
    // Ensure fresh data in dev; change to "force-cache" if you want caching
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch character");
  }

  return res.json();
}

export default async function Home() {
  const character = await getCharacter();

  return (
    <main className="min-h-screen w-screen flex items-center justify-center p-8">
      <section className="w-full max-w-xl sm:bg-pink-300 rounded-3xl p-8 flex flex-col items-center gap-4 bg-white sm:h-auto sm:w-auto dark:bg-black">
        <img
          className="w-32 h-32 rounded-full"
          src={character.image}
          alt={character.name}
        />

        <span
          className={`text-center py-1 px-2 font-bold rounded-xl ${
            character.status === "Alive"
              ? "bg-green-400 text-green-800"
              : "bg-red-500 text-white"
          }`}
        >
          {character.status}
        </span>

        <span className="text-xl font-bold hover:text-blue-300 hover:underline hover:text-3xl">
          {character.name}
        </span>
        <span className="uppercase">{character.species}</span>
        <span>In {character.episode.length} episodes</span>

        <div className="grid gap-3 sm:gap-0 grid-cols-1 sm:grid-cols-2">
          <div className="flex flex-col items-center gap-1">
            <span className="font-bold">Origin</span>
            <span>{character.origin.name}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="font-bold">Lives</span>
            <span>{character.location.name}</span>
          </div>
        </div>
      </section>
    </main>
  );
}
