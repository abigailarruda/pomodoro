import React from "react";

import "./styles.css";

interface ModalProps {
  target: string;
}

const Modal: React.FC<ModalProps> = ({ target, children }) => {
  return (
    <div
      className="modal fade"
      id={target}
      tabIndex={-1}
      aria-labelledby={target}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-sm modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
