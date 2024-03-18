import { createContext, useContext, useState } from "react";
import api from "../../api/ContextApi";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [show, setShow] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);

  const handleShowModal = () => setShowModal(!showModal);

  const handleClickListarUsuarios = () => {
    api
      .get("users/")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const HandleCadastrarUser = async (user) => {
    return await api.post("users", user);
  };

  return (
    <UserContext.Provider
      value={{
        show,
        setShow,
        showModal,
        users,
        handleShowModal,
        handleClickListarUsuarios,
        HandleCadastrarUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error("Não foi possível inicializar o contexto do usuário");
  }
  return ctx;
};
