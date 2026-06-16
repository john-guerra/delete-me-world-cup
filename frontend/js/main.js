async function MyFrontEnd() {
  console.log("👋🏼 Hello from the FRONT END!");
  const page = 1;
  const limit = 10;

  async function fetchGames() {
    const res = await fetch(`/api/games/?page=${page}&limit=${limit}`);
    if (!res.ok) {
      console.error("Error fetching games:", res.statusText);
      return [];
    }
    return await res.json();
  }

  function displayGames(games) {
    const gamesList = document.getElementById("games-list");
    gamesList.innerHTML = "";

    for (let game of games) {
      const gameItem = document.createElement("div");
      gameItem.className = "list-group-item";
      gameItem.textContent = `${game.team_home} vs ${game.team_away} - ${new Date(game.match_date).toLocaleString()}`;
      gamesList.appendChild(gameItem);
    }
  }

  const games = await fetchGames();
  console.log("Fetched games:", games);
  displayGames(games);
}
MyFrontEnd();
