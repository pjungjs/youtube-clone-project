import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllVideos } from "../../api/fetch";
import VideosPagination from "./VideosPagination";
import VideosList from "./VideosList";

// //pulling from database for testing
// import searchBrunoMars from "../../data/db";

export default function VideosIndex({ title }) {
  const [searchResult, setSearchResult] = useState({});
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // setSearchResult(searchBrunoMars)
    setSearchResult({});
    getAllVideos(title, 50)
      .then((response) => {
        if(response.error) {
          setError(response.error);
        } else {
          setSearchResult(response);
        }
      })
      .catch((error) => console.log(error))
  }, [title]);
  
  if (error) {
    return navigate(`/error/${error.code}`);
  } else {
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
}