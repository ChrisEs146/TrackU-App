import "./modal.css";

/**
 * Component wrapper that gives components a modal-like beahviour
 * @returns Modal component wrapper
 */
const Modal = (props) => {
  return (
    <div className={props.isModalActive ? "modal active" : "modal"}>
      <div className="modal__background"></div>
      {props.children}
    </div>
  );
};

export default Modal;
