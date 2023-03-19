import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorMessage(error) {
  const [errorModal, setErrorModal] = useState(true);
  const navigate = useNavigate();

  function toggleModal() {
    setErrorModal(!errorModal);
    navigate("/about");
  }

  return (
    <>
      {
        errorModal
        ? (
          <div className="modal">
            <div className="modal-content">
              <h2>Please try again later</h2>
              <p>Error Loading the Videos</p>
              <p>{error}</p>
              <button className="close-modal" onClick={toggleModal}>X</button>
            </div>
          </div>
        ) : null
      }
    </>
  );
}
