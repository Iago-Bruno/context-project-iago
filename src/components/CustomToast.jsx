import { Toast, ToastContainer } from "react-bootstrap";

export const CustomToast = ({ show, delay, variant, title, body }) => {
  return (
    <ToastContainer className="p-3" position="top-end" style={{ zIndex: 1 }}>
      <Toast
        show={show}
        delay={delay}
        className="d-inline-block m-1"
        bg={variant}
        autohide
      >
        <Toast.Header>
          <strong className="me-auto">{title}</strong>
        </Toast.Header>
        <Toast.Body className="dark">{body}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};
