import travelIcon from "../assets/icons8-location-90.png";

const card = (props) => {
  return (
    <div className="flex card">
      <div>
        <img
          src={props.item.imageUrl}
          alt={props.item.title}
          className="travel-img"
        />
      </div>
      <div className="card__det">
        <div className="card__location flex">
          <div className="icon__group flex">
            <img src={travelIcon} alt="" />
            <p>{props.item.location}</p>
          </div>
          <a href={props.item.googleMapsUrl} target="_blank" rel="noreferrer">
            View on Google Maps
          </a>
        </div>
        <h1>{props.item.title}</h1>
        <div>
          <p className="card__date">
            {props.item.startDate} - {props.item.endDate}
          </p>
          <p>{props.item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default card;
