import { Link } from "react-router-dom";

export default function VideosList({ posts }) {
  function fixTitle(title) {
    //used regex to simplify the code
    const entities = { "&quot;": '"', "&#39;": "'", "&amp;": "&" };
    return title.replace(/(&quot;|&#39;|&amp;)/g, match => entities[match]);
  }

  return posts.map(video => {
    const id = video.id.videoId;
    const videoTitle = fixTitle(video.snippet.title);
    const videoThumbnail = video.snippet.thumbnails.medium.url;

    return(
      <div key={id} className="eachVideo">
        <Link to={`/videos/${id}`}>
          <img src={videoThumbnail} alt="video thumbnail" />
        </Link>
        <p>{videoTitle}</p>
      </div>
    )
  })
}