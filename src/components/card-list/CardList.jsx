import Card from "./Card";
import "./card-list.css";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} key={Math.random()} />;
    })}
  </div>
);

export default CardList;
