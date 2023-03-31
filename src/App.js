import { useState } from "react";
import "./App.css";
import CardList from "./components/card-list/CardList";
import { SearchBox } from "./components/search-box/SearchBox";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => setMonsters(users));

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="search-box"
        onChangeHandler={onSearchChange}
        placeHolder="Search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

// componentDidMount() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((users) =>
//       this.setState(
//         () => {
//           return { monsters: users };
//         },
//         () => {
//           // console.log(this.state);
//         }
//       )
//     );
// }

// onSearchChange = (event) => {
//   const searchField = event.target.value.toLocaleLowerCase();
//   this.setState(() => {
//     return { searchField };
//   });
// };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     return (
//       <div className="App">
//       <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           className="search-box"
//           onChangeHandler={onSearchChange}
//           placeHolder="Search monsters"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
