import { Container } from "react-bootstrap";
import { UserProvider } from "../../context/UserContext";
import { OpcoesUser } from "./OpçoesUser";
import { ListagemUser } from "./ListagemUsers";
import { UserForm } from "./UserForm";

export const UserBaseLayout = () => {
  return (
    <UserProvider>
      <Container className="h-100 w-100 p-4" fluid>
        <OpcoesUser />
        <ListagemUser />
        <UserForm />
      </Container>
    </UserProvider>
  );
};
