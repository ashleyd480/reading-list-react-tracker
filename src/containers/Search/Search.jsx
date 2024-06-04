import { useState } from "react";
import ListContainer from "../ListContainer/ListContainer";
import Button from "../../components/ToDo/Button/Button";
import "./Search.css";
import "../Container.css";

const Search = ({ stuffToDo }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    console.log(searchQuery);
  };

  const displaySearchResults = () => {
    const matchingResults = stuffToDo.filter((todo) =>
      todo.task.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log("hello");
    if (matchingResults.length !== 0) {
      setSearchResults(matchingResults);
    } else {
      setErrorMessage("There were no matching results");
    }
  };

  return (
    <div className="any-container to-do-list">
      <h2> Search </h2>
      <div className="search-container">
        <input
          className="input-box"
          name="searchbox"
          placeholder="What book do you want to search..."
          value={searchQuery}
          onChange={handleSearch} //callback to handleInputChange when user enters task
        />
        <Button
          color={"green"}
          onClickFunction={() => {
            displaySearchResults(searchResults);
          }}
        >
          Search
        </Button>
      </div>
      <p id="error-message"> {errorMessage} </p>
      <ListContainer listMappingOver={searchResults}/>
    </div>
  );
};

export default Search;
