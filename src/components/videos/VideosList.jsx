import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllVideos } from "../../api/fetch";

export default function VideosList({ title }) {
  const [searchResult, setSearchResult] = useState({});

  useEffect(() => {
    getAllVideos(title, 10)
      .then((response) => {
        setSearchResult(response)
      })
      .catch((error) => console.log(error))
  }, [title]);

  function fixTitle(title) {
    let fixedTitle = title;
    while (fixedTitle.includes("&quot;") || fixedTitle.includes("&#39;")) {
        fixedTitle = fixedTitle.replace("&quot;", '"');
        fixedTitle = fixedTitle.replace("&#39;", "'");
    }
    return fixedTitle;
  }

  function showVideos() {
    if(Object.keys(searchResult).length !== 0) {
      return searchResult.items.map(video => {
        const kind = video.id.kind;
        const id = video.id.channelId || video.id.videoId;
        const videoTitle = fixTitle(video.snippet.title);
        const videoThumbnail = video.snippet.thumbnails.medium.url;

        return(
          <div key={`${kind}-${id}`} className="eachVideo">
            <Link to={`/videos/${id}`}>
              <img src={videoThumbnail} />
            </Link>
            <p>{videoTitle}</p>
          </div>
        )
      })
    }
  }

  return (
    <div className="videosList">
      {showVideos()}
    </div>
  );
}