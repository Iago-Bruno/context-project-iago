import { useUser } from "../../context/UserContext";
import { CustomModalForm } from "../../../components/CustomModalForm";
import { UserFormContent } from "./components/UserFormContent";

export const UserForm = () => {
  const { showModal, handleShowModal } = useUser();

  return (
    <>
      <CustomModalForm
        title="Cadastrar usuário"
        show={showModal}
        hide={handleShowModal}
        body={<UserFormContent />}
      />
    </>
  );
};
