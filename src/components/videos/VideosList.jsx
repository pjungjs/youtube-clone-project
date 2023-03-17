import { Link } from "react-router-dom";

export default function VideosList({ posts }) {
  function fixTitle(title) {
    let fixedTitle = title;
    while (fixedTitle.includes("&quot;") || fixedTitle.includes("&#39;") || fixedTitle.includes("&amp;")) {
      fixedTitle = fixedTitle.replace("&quot;", '"');
      fixedTitle = fixedTitle.replace("&#39;", "'");
      fixedTitle = fixedTitle.replace("&amp;", "&");
    }
    return fixedTitle;
  }

  return posts.map(video => {
    const id = video.id.videoId;
    const videoTitle = fixTitle(video.snippet.title);
    const videoThumbnail = video.snippet.thumbnails.medium.url;

    return(
      <div key={id} className="eachVideo">
        <Link to={`/videos/${id}`}>
          <img src={videoThumbnail} />
        </Link>
        <p>{videoTitle}</p>
      </div>
    )
  })
}