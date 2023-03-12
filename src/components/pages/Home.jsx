import { useState } from "react";
import VideosList from "../videos/VideosList";

export default function Home() {
  const [title, setTitle] = useState("");
  const [searchToggle, setSearchToggle] = useState(false);

  function updateSearch(event) {
    const searchResult = event.target.value;
    if (!searchResult) {
      setSearchToggle(false);
    }
    setTitle(searchResult);
  }
 
  function handleSearch(event) {
    event.preventDefault();
    setSearchToggle(true);
  }

  return (
    <>
      <form onSubmit={handleSearch}>
        <input type="text" id="search" placeholder="Search..." value={title} onChange={updateSearch} />
        <button  type="submit">Search</button>
      </form>

      {
        !searchToggle
        ? <p className="noSearch">No Search Result Yet! Please submit a search above!</p>
        : <VideosList title={title} />
      }
    </>
  );
}