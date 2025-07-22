import React, { useState } from "react";

const games = [
  {
    id: 1,
    name: "Thursday 5-a-side",
    location: "Mt Eden (Auckland Grammar)",
    time: "Thursday, 7:00 PM",
    price: "$10",
    tags: ["All Abilities", "Outdoor", "4G Turf","]
  },
  id: 3,
    name: "Wednesday 5-a-side",
    location: "Albany Football Hub",
    time: "Wednesday, 6:45 PM",
    price: "$10",
    tags: ["All Abilities", "Outdoor", "4G Turf", "Women's ONLY" ]
  {
    id: 3,
    name: "Sunday Social Game",
    location: "Albany Football Hub",
    time: "Sunday, 3:00 PM",
    price: "$12",
    tags: ["Casual", "Outdoor", "90 minutes", "Mini tourn if 10 plus", "Men & Women"]
  }
];

const App = () => {
  const [joinedGameId, setJoinedGameId] = useState(null);
  const [selectedGame, setSelectedGame] = useState(null);

  const handleJoin = (id) => {
    setJoinedGameId(id);
    Telegram.WebApp.showAlert("You’ve joined the game!");
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h2>Upcoming Games</h2>
      {!selectedGame ? (
        games.map((game) => (
          <div key={game.id} style={{ border: "1px solid #ccc", padding: 10, marginBottom: 15 }}>
            <h3>{game.name}</h3>
            <p>{game.location}</p>
            <p>{game.time}</p>
            <p>{game.price}</p>
            <div>
              {game.tags.map((tag) => (
                <span key={tag} style={{ padding: "2px 6px", backgroundColor: "#eee", marginRight: 5, borderRadius: 4, fontSize: 12 }}>
                  {tag}
                </span>
              ))}
            </div>
            <button onClick={() => setSelectedGame(game)} style={{ marginTop: 10 }}>View Details</button>
          </div>
        ))
      ) : (
        <div>
          <button onClick={() => setSelectedGame(null)}>← Back to Games</button>
          <h2>{selectedGame.name}</h2>
          <p><strong>Location:</strong> {selectedGame.location}</p>
          <p><strong>Time:</strong> {selectedGame.time}</p>
          <p><strong>Price:</strong> {selectedGame.price}</p>
          <div>
            {selectedGame.tags.map((tag) => (
              <span key={tag} style={{ padding: "4px 8px", backgroundColor: "#ddd", marginRight: 5, borderRadius: 4 }}>
                {tag}
              </span>
            ))}
          </div>
          <button onClick={() => handleJoin(selectedGame.id)} style={{ marginTop: 15 }}>
            {joinedGameId === selectedGame.id ? "✅ Joined" : "Join Game"}
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
