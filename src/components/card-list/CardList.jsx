import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div>
        {monsters.map((monster) => (
          <h1 key={Math.random()}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;
