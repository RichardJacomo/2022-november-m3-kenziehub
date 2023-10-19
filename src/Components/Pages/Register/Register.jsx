import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Div } from "../../../Styles/Register";
import { api } from "../..//../Services/Api";
import { UserContext } from "../../../Contexts/UserProvider";

export const RegisterPage = () => {
  const { setLoading } = useContext(UserContext);
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Senha deve conter no mínimo 8 caracteres, uma letra, um número e um caractere especial"
      ),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas devem ser iguais")
      .required("Confirmação obrigatória"),

    bio: yup.string().required("Bio obrigatória"),
    contact: yup.string().required("Contato obrigatório"),
    course_module: yup.string().required("Módulo orbigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const requestResult = (request) => {
    if (request.statusText === "Created") {
      toast.success("Usuário cadastrado!");
      setTimeout(() => {
        setLoading(false);
        navigate("/");
      }, 2000);
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await api.post("/users", data);
      requestResult(response);
    } catch (error) {
      toast.error("Ocorreu um erro no cadastro!");
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <>
      <Div>
        <ToastContainer />
        <div className="div-title-and-button">
          <h1 className="title-register">Kenzie Hub</h1>
          <Link className="button-back" to="/">
            Voltar
          </Link>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="register">Crie sua conta</h2>
          <p className="advice-head">Rápido e grátis, vamos nessa</p>
          <div className="div-name-register">
            <label htmlFor="name">Nome</label>
            <input placeholder="Digite aqui seu nome" {...register("name")} />
            {errors.name?.message && (
              <p className="error-msg">{errors.name.message}</p>
            )}
          </div>
          <div className="div-email-register">
            <label htmlFor="email">Email</label>
            <input placeholder="Digite aqui seu email" {...register("email")} />
            {errors.email?.message && (
              <p className="error-msg">{errors.email.message}</p>
            )}
          </div>
          <div className="div-pass-register">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            {errors.password?.message && (
              <p className="error-msg">{errors.password.message}</p>
            )}
          </div>
          <div className="div-pass-register-confirm">
            <label htmlFor="passwordConfirm">Senha</label>
            <input
              type="password"
              placeholder="Confirme sua senha"
              {...register("confirm_password")}
            />
            {errors.confirm_password?.message && (
              <p className="error-msg">{errors.confirm_password.message}</p>
            )}
          </div>
          <div className="div-bio">
            <label htmlFor="bio">Bio</label>
            <input placeholder="Fale sobre você" {...register("bio")} />
            {errors.bio?.message && (
              <p className="error-msg">{errors.bio.message}</p>
            )}
          </div>
          <div className="div-contact">
            <label htmlFor="contact">Contato</label>
            <input placeholder="Opção de contato" {...register("contact")} />
            {errors.contact?.message && (
              <p className="error-msg">{errors.contact.message}</p>
            )}
          </div>
          <div className="div-select">
            <p className="p-select">Selecionar módulo</p>
            <select
              name="course_module"
              id="module"
              {...register("course_module")}
            >
              <option value="">Selecione o módulo</option>
              <option value="Primeiro Módulo">Primeiro Módulo</option>
              <option value="Segundo Módulo">Segundo Módulo</option>
              <option value="Terceiro Módulo">Terceiro Módulo</option>
              <option value="Quarto Módulo">Quarto Módulo</option>
              <option value="Quinto Módulo">Quinto Módulo</option>
              <option value="Sexto Módulo">Sexto Módulo</option>
            </select>
            {errors.course_module?.message && (
              <p className="error-msg">{errors.course_module.message}</p>
            )}
          </div>
          <button className="button-register">Cadastrar</button>
        </form>
      </Div>
    </>
  );
};
