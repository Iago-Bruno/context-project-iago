import { Button, Table } from "react-bootstrap";
import Component2 from "./Component2";
import { useUser } from "../context/UserContext";
import { CustomModalForm } from "../../components/CustomModalForm";
import { UserForm } from "./UserForm";

const Component1 = () => {
  const {
    show,
    setShow,
    showModal,
    handleShowModal,
    users,
    handleClickListarUsuarios,
  } = useUser();

  const handleClickShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div>Teste</div>
      <Button variant="primary" onClick={handleClickShow}>
        Mudar Show
      </Button>

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

      <Component2 />

      {users.length !== 0 && (
        <Table striped bordered hover className="mt-2">
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th>Nome</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td align="center" valign="middle" width={50}>
                    {user.id}
                  </td>
                  <td>{user.nome}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}

      <CustomModalForm
        title="Cadastrar usuário"
        show={showModal}
        hide={handleShowModal}
        body={<UserForm />}
      />
    </>
  );
};

export default Component1;
