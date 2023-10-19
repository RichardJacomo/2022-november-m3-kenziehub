import del from "../../../../Assets/del.png";
import { useContext } from "react";
import { TechContext } from "../../../../Contexts/TechProvider";
import { Li } from "../../../../Styles/CardTech";
import { FormModalEdit } from "../ModalEdit/ModalEdit";
import { ToastContainer } from "react-toastify";

export const CardTech = () => {
  const { user, deleteItem, modalEdit, setModalEdit, setModalPlaceholder } =
    useContext(TechContext);

  const userTechs = user.techs;

  const openModalEdit = (value) => {
    setModalPlaceholder(value);
    modalEdit === true ? setModalEdit(false) : setModalEdit(true);
  };

  return (
    <>
      <ToastContainer />
      {modalEdit === true ? <FormModalEdit /> : ""}
      {userTechs?.map((data) => (
        <Li key={data.id} className="li-tech">
          <h2 onClick={() => openModalEdit(data)} className="tech">
            {data.title}
          </h2>
          <div className="div-level-and-delete">
            <p className="text-level">{data.status}</p>
            <button
              onClick={() => deleteItem(data.id)}
              className="button-delete"
            >
              <img src={del} alt="" />
            </button>
          </div>
        </Li>
      ))}
    </>
  );
};
