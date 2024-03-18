import { Button, Modal } from "react-bootstrap";

export const CustomModalForm = ({ show, hide, title, body }) => {
  return (
    <Modal show={show} onHide={hide}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={hide}>
          Fechar
        </Button>
        <Button type="submit" variant="primary">
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
