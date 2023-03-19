import { useState, useEffect } from "react";
import { getAllVideos } from "../../api/fetch";
import VideosPagination from "./VideosPagination";
import VideosList from "./VideosList";

// //pulling from database for testing
// import searchBrunoMars from "../../data/db";

export default function VideosIndex({ title }) {
  const [searchResult, setSearchResult] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // setSearchResult(searchBrunoMars)
    getAllVideos(title, 50)
      .then((response) => {
        setSearchResult(response);
      })
      .catch((error) => console.log("Error on mounting: ", error))
  }, [title]);

  if (Object.keys(searchResult).length !== 0) {
    return (
      <>
        <div className="videosList">
          <VideosList
            posts={posts}
          />
        </div>
        <div className="pagination">
          <VideosPagination
            setPosts={setPosts}
            searchResult={searchResult.items}
            totalPosts={searchResult.items.length}
          />
        </div>
      </>
    );
  }
}