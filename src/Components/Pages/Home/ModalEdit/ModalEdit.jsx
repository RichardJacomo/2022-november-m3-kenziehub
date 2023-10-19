import { useContext } from "react";
import { TechContext } from "../../../../Contexts/TechProvider";
import { api } from "../../../../Services/Api";
import { ModalEdit } from "../../../../Styles/ModalEdit";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { toast, ToastContainer } from "react-toastify";

export const FormModalEdit = () => {
  const {
    setModalEdit,
    modalPlaceholder,
    user,
    setUser,
    deleteItem,
    refresh,
    setRefresh,
    setLoading,
  } = useContext(TechContext);

  const formSchema = yup.object().shape({
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
      const { data } = await api.put(
        `/users/techs/${modalPlaceholder.id}`,
        body,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      if (refresh === false) {
        setRefresh(true);
      } else {
        setRefresh(false);
      }
      toast.success("Status da tecnologia atualizado");
      setLoading(true);
      setUser(user);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <ToastContainer />
      <ModalEdit>
        <div className="div-global">
          <div className="div-title">
            <h1 className="title">Tecnologia Detalhes</h1>
            <button
              onClick={() => setModalEdit(false)}
              className="button-close"
            >
              X
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="form-content">
            <label htmlFor="name">Nome do projeto</label>
            <input
              className="input-modal"
              type="text"
              placeholder={modalPlaceholder.title}
              disabled
            />
            <label htmlFor="name">Status</label>
            <select className="select-level" {...register("status")}>
              <option value={modalPlaceholder.status}>
                {modalPlaceholder.status}
              </option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            {errors.status?.message && (
              <p className="error-msg">{errors.status.message}</p>
            )}
            <div className="buttons-fotter">
              <button className="button-send">Salvar alterações</button>
              <button
                onClick={() => deleteItem(modalPlaceholder.id)}
                className="button-del"
              >
                Excluir
              </button>
            </div>
          </form>
        </div>
      </ModalEdit>
    </>
  );
};
