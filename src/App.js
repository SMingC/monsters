import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component.jsx";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component.jsx";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSeacheChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title"> Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSeacheChange}
        placeholder="Search monsters"
        className="monsters-search-box"
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

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

// onSeacheChange = (event) => {
//   const searchField = event.target.value.toLocaleLowerCase();
//   this.setState(() => {
//     return { searchField: searchField };
//   });
// };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSeacheChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title"> Monsters Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSeacheChange}
//           placeholder="Search monsters"
//           className="monsters-search-box"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
