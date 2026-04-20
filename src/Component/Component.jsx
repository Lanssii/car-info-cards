import "./Component.css";

function Component(props) {
  return (
    <>
      <div className="card-container">
        <img className="car-image" src={props.imageSrc} alt="Sedan icon" />
        <h1 className="title">Sedans</h1>
        <p className="info">
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
        <button className="more-btn">Learn More</button>
      </div>
    </>
  );
}

export default Component;
