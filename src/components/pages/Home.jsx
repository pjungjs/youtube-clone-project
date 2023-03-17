import { useState } from "react";
import VideosIndex from "../videos/VideosIndex";

export default function Home() {
  const [title, setTitle] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searchToggle, setSearchToggle] = useState(false);

  function updateSearch(event) {
    const inputValue = event.target.value;
    if (!inputValue) {
      setSearchToggle(false);
    }
    setSearchValue(inputValue);
  }
 
  function handleSearch(event) {
    event.preventDefault();
    setSearchToggle(true);
    setTitle(searchValue);
  }

  return (
    <main>
      <form onSubmit={handleSearch}>
        <input type="text" id="search" placeholder="Search..." value={searchValue} onChange={updateSearch} />
        <button  type="submit">Search</button>
      </form>

      <div className="container">
        {
          !searchToggle
          ? <p className="noSearch">No Search Result Yet! Please submit a search above!</p>
          : <VideosIndex title={title} />
        }
      </div>
    </main>
  );
}