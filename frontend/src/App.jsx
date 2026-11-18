import { useState } from "react";
import "./styles/home.css";
import "./styles/map.css";
import CampusMap from "./components/Map";

function App() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Marywood Campus Navigator</h1>

      <div className="nav-tabs">
        <button
          className={`nav-btn ${activeTab === "Home" ? "active" : ""}`}
          onClick={() => setActiveTab("Home")}
        >
          Home
        </button>

        <button
          className={`nav-btn ${activeTab === "Map" ? "active" : ""}`}
          onClick={() => setActiveTab("Map")}
        >
          Map
        </button>
      </div>

      {activeTab === "Home" && (
        <div>
          <h2>Welcome to Marywood University</h2>
          <p>
            Skip the hassle of searching for buildings, offices, and resources
            on campus. Use our interactive map to instantly locate campus
            buildings to find what you need quickly and easily.
          </p>

          <div className="home-images">
            <img src="/src/assets/marywood1.jpg" />
            <img src="/src/assets/marywood3.jpg" />
          </div>


          <div className="feature-card" onClick={() => setActiveTab("Map")}>
              <h3>Interactive Campus Map</h3>
              <p>
                Locate major buildings, view campus photos, and see which
                offices live inside each hall.
              </p>
              <span className="feature-link">View Campus Map →</span>
            </div>

          <div className="home-info">
            <div className="info-pill">
              <strong>Campus Safety (24/7):</strong> 570-348-6242
            </div>
          </div>
        </div>
      )}

      {activeTab === "Map" && (
        <div>
          <h1>Interactive Campus Map</h1>
          <CampusMap />
        </div>
      )}
    </div>
  );
}

export default App;