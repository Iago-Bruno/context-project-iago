import { Button, Container } from "react-bootstrap";
import { useUser } from "../../context/UserContext";

export const OpcoesUser = () => {
  const { handleClickListarUsuarios, handleShowModal } = useUser();

  return (
    <Container fluid>
      <Button
        variant="success"
        className="mx-2"
        onClick={handleClickListarUsuarios}
      >
        Listar Usuários
      </Button>

      <Button variant="warning" onClick={handleShowModal}>
        Cadastrar Usuário
      </Button>
    </Container>
  );
};
