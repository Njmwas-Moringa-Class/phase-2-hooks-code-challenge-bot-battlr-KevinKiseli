

import React from "react";

const BotCollection = ({ bots, enlistBot }) => {

  //Bot styling
  
  const containerStyle = {
    maxWidth: "800px",
    margin: "20px auto",
    textAlign: "center",
    color: "#2c3e50",
  };

  const botListStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
    justifyContent: "center",
  };

  const botItemStyle = {
    width: "100%",
    padding: "15px",
    border: "2px solid #3498db",
    borderRadius: "10px",
    boxSizing: "border-box",
    cursor: "pointer",
    transition: "transform 0.3s ease-in-out",
    backgroundColor: "#ecf0f1",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const handleHover = (e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  };

  const handleHoverOut = (e) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  // The Bot Attributes

  return (
    <div style={containerStyle}>
      <h1>My Bot Collection</h1>
      <div style={botListStyle}>
        {bots.map((bot) => (
          <div
            key={bot.id}
            style={botItemStyle}
            onClick={() => enlistBot(bot)}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
          >
            <h2 style={{ color: "#e74c3c" }}>{bot.name}</h2>
            <p>ID: {bot.id}</p>
            <p>💚 Health: {bot.health}</p>
            <p>💥 Damage: {bot.damage}</p>
            <p>🛡️ Armor: {bot.armor}</p>
            <p>🤖 Class: {bot.bot_class}</p>
            <p>🔮 Catchphrase: "{bot.catchphrase}"</p>
            <img
              src={bot.avatar_url}
              alt={`${bot.name} Avatar`}
              style={{
                maxWidth: "100%",
                borderRadius: "5px",
                marginTop: "10px",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
