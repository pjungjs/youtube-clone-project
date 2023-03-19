import { useState } from "react";
import VideosIndex from "../videos/VideosIndex";

export default function Home() {
  const [title, setTitle] = useState("");
  const [searchValue, setSearchValue] = useState("");

  function updateSearch(event) {
    setSearchValue(event.target.value);
  }
 
  function handleSearch(event) {
    event.preventDefault();
    setTitle(searchValue);
    setSearchValue("");
  }

  return (
    <main>
      <form onSubmit={handleSearch}>
        <input type="text" id="search" placeholder="Search..." value={searchValue} onChange={updateSearch} />
        <button  type="submit">Search</button>
      </form>

      <div className="container">
        {
          !title
          ? <p className="noSearch">No Search Result Yet! Please submit a search above!</p>
          : <VideosIndex title={title} />
        }
      </div>
    </main>
  );
}