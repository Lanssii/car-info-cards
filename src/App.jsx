import "./App.css";
import Component from "./Component/Component.jsx";
import sedanIcon from "./assets/car1-card.png";
// import sedanIcon from './assets/car2-card.png';
// import sedanIcon from './assets/car3-card.png';
function App() {
  return (
    <>
      <Component imageSrc={sedanIcon} />
    </>
  );
}

export default App;
