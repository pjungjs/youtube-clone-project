import { useParams } from "react-router-dom";

export default function ShowVideo() {
  const { id } = useParams();

  return (
    <div className="showVideo">
      <iframe src={`https://www.youtube.com/embed/${id}`} allowFullScreen ></iframe>
    </div>
  );
}