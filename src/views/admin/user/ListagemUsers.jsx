import { Button, Toast, ToastContainer } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { useUser } from "../../context/UserContext";
import { useState } from "react";
import api from "../../../api/ContextApi";
import { CustomToast } from "../../../components/CustomToast";

export const ListagemUser = () => {
  const { users, handleClickListarUsuarios } = useUser();
  const [showToast, setShowToast] = useState(false);

  const handleClickRemoverUsuario = (userId) => {
    api
      .delete(`users/${userId}`)
      .then(() => {
        handleClickListarUsuarios();
        setShowToast(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const columns = [
    {
      name: "Nome",
      selector: (row) => row.nome,
    },
    {
      name: "E-mail",
      selector: (row) => row.email,
    },
    {
      name: "Opções",
      selector: (row) => {
        let { id } = row;
        return (
          <Button
            variant="danger"
            onClick={() => handleClickRemoverUsuario(id)}
          >
            Remover
          </Button>
        );
      },
    },
  ];

  return (
    <>
      <DataTable columns={columns} data={users} />

      <CustomToast
        show={showToast}
        delay={2000}
        variant={"success"}
        title="Usuário deletado"
        body="Usuário deletado com sucesso"
      />
    </>
  );
};
