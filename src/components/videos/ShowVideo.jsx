import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

export default function ShowVideo() {
  const { id } = useParams();

  const opts = {
    height: '480',
    width: '854',
    playerVars: {
      autoplay: 0,
      playsinline: 1
    }
  };

  return (
    <div className="showVideo">
      <YouTube videoId={id} opts={opts} />
      {/* <iframe src={`https://www.youtube.com/embed/${id}`} allowFullScreen ></iframe> */}
    </div>
  );
}