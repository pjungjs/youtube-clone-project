import { useNavigate } from "react-router-dom";

export default function ErrorMessage() {
  const navigate = useNavigate();

  return (
    <>
      {
        <div className="modal">
          <div className="modal-content">
            <h2>Please try again later</h2>
            <p>Error Loading the Videos</p>
            <button className="close-modal" onClick={() => navigate("/")}>X</button>
          </div>
        </div>
      }
    </>
  );
}
