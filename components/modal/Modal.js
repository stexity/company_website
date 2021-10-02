import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

function Modal({ show, onClose, children, title }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div
        style={{
          background: "white",
          width: "500px",
          height: "600px",
          borderRadius: "15px",
          padding: "15px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "25px",
          }}
        >
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </div>
        {title && <h1 style={{ color: "#FFF" }}>{title}</h1>}
        <p>{children}</p>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}

export default Modal;
