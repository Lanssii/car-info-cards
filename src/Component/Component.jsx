import "./Component.css";

function Component(props) {
  return (
    <>
      <div className="card-container">
        <img className="car-image" src={props.imageSrc} alt="Sedan icon" />
        <h1 className="title">{props.title}</h1>
        <p className="info">{props.info}</p>
        <button className="more-btn">Learn More</button>
      </div>
    </>
  );
}

export default Component;
