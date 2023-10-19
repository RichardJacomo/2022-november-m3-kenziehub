import { useContext } from "react";
import { TechContext } from "../../../../Contexts/TechProvider";
import { Modal } from "../../../../Styles/Modal";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { api } from "../../../../Services/Api";
import { toast, ToastContainer } from "react-toastify";

export const FormModal = () => {
  const { setModal, user, setUser, refresh, setRefresh, setLoading } =
    useContext(TechContext);

  const formSchema = yup.object().shape({
    title: yup.string().required("Tecnologia obrigatória"),
    status: yup.string().required("Status obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  async function onSubmit(body) {
    setLoading(false);
    const token = localStorage.getItem("@TOKEN");
    try {
      const { data } = await api.post("/users/techs", body, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      if (refresh === false) {
        setRefresh(true);
      } else {
        setRefresh(false);
      }
      toast.success("Tecnologia criada");
      setLoading(true);
      setUser(user);
    } catch (error) {
      toast.error("Esta tecnologia já foi adicionada");
      console.error(error);
    }
  }

  return (
    <Modal>
      <ToastContainer />
      <div className="div-global">
        <div className="div-title">
          <h1 className="title">Cadastrar Tecnologia</h1>
          <button onClick={() => setModal(false)} className="button-close">
            X
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="form-content">
          <label htmlFor="name">Nome</label>
          <input
            className="input-modal"
            type="text"
            placeholder="Digite o nome da tecnologia"
            {...register("title")}
          />
          {errors.title?.message && (
            <p className="error-msg">{errors.title.message}</p>
          )}
          <label htmlFor="name">Selecionar status</label>
          <select className="select-level" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          {errors.status?.message && (
            <p className="error-msg">{errors.status.message}</p>
          )}
          <button className="button-send">Cadastrar Tecnologia</button>
        </form>
      </div>
    </Modal>
  );
};
