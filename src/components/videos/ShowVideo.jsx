import { useParams } from "react-router-dom";

export default function ShowVideo() {
  const { id } = useParams();

  return (
    <div>
      <iframe src={`https://www.youtube.com/embed/${id}`} width={1000} height={500} allowFullScreen ></iframe>
    </div>
  );
}