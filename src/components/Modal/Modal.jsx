import Modal from "react-bootstrap/Modal";

export const ModalComponent = ({ type, handleClose, show, children }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        {type === "edit" ? (
          <Modal.Title>Edit visitor</Modal.Title>
        ) : (
          <Modal.Title>Add new visitor</Modal.Title>
        )}
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};
