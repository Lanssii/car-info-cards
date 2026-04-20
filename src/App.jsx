import "./App.css";
import Component from "./Component/Component.jsx";
import sedanIcon from "./assets/car1-card.png";
import suvsIcon from "./assets/car2-card.png";
import luxuryIcon from "./assets/car3-card.png";
function App() {
  return (
    <>
      <div className="cards-container">
        <Component
          imageSrc={sedanIcon}
          title="SEDANS"
          info=" Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip."
        />
        <Component
          imageSrc={suvsIcon}
          title="SUVS"
          info="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
        />
        <Component
          imageSrc={luxuryIcon}
          title="LUXURY"
          info="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. "
        />
      </div>
    </>
  );
}

export default App;
