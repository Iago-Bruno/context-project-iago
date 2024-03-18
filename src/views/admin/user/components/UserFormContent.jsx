import { Formik } from "formik";
import {
  Alert,
  Button,
  Container,
  FloatingLabel,
  Form,
  Toast,
} from "react-bootstrap";
import * as Yup from "yup";
import { useState } from "react";
import { useUser } from "../../../context/UserContext";
import { CustomToast } from "../../../../components/CustomToast";

const SignUpUserSchema = Yup.object().shape({
  nome: Yup.string().required().min(3).max(80),
  email: Yup.string().email().required(),
});

export const UserFormContent = () => {
  const { HandleCadastrarUser } = useUser();

  const [showToast, setShowToast] = useState(false);

  const hideToast = () => {
    setShowToast(false);
  };

  const handleSubmitUser = async (values, { setSubmitting, resetForm }) => {
    try {
      HandleCadastrarUser(values);
      setSubmitting(false);
      setShowToast(true);
      resetForm();
    } catch (error) {
      const { response } = error;
      const { request, ...errorObject } = response;
      console.log(errorObject);
    }
  };

  return (
    <>
      <Formik
        initialValues={{ nome: "", email: "" }}
        onSubmit={handleSubmitUser}
        validationSchema={SignUpUserSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <>
            <Container>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    name="nome"
                    value={values.nome || ""}
                    type="text"
                    placeholder="Digite o nome"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {errors.nome && touched.nome && (
                    <Alert variant={"danger"} className="mt-2">
                      * {errors.nome}
                    </Alert>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    name="email"
                    value={values.email || ""}
                    type="email"
                    placeholder="Digite o email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {errors.email && touched.email && (
                    <Alert variant={"danger"} className="mt-2">
                      * {errors.email}
                    </Alert>
                  )}
                </Form.Group>

                <Button
                  className="mb-3"
                  variant="primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Cadastrar
                </Button>
              </Form>

              <CustomToast
                show={showToast}
                delay={3000}
                variant={"success"}
                title={"Usuário cadastrado"}
                body={"Usuário cadastrado com sucesso!"}
              />
            </Container>
          </>
        )}
      </Formik>
    </>
  );
};
