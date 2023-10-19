import { DivHome } from "../../../Styles/Home";
import { Header } from "../Header/Header";
import { useContext } from "react";
import { TechContext } from "../../../Contexts/TechProvider";
import { CardTech } from "./CardTech/CardTech";
import { FormModal } from "./Modal/Modal";

export const HomePage = () => {
  const { user, modal, setModal } = useContext(TechContext);

  const modalStatus = (value) => {
    if (!modal) {
      setModal(value);
    } else {
      setModal(false);
    }
  };

  return (
    <DivHome>
      <Header />
      <section className="div-name-and-description">
        <h1 className="name-profile">Olá, {user.name}</h1>
        <p className="description-profile">{user.course_module}</p>
      </section>
      <main className="main-content">
        <div className="div-title-tech">
          <h1 className="title-tech">Tecnologias</h1>
          <button
            type="submit"
            onClick={() => modalStatus(true)}
            className="button-tech-add"
          >
            +
          </button>
        </div>
        {modal === true ? <FormModal /> : ""}
        <ul className="ul-tech">
          <CardTech></CardTech>
        </ul>
      </main>
    </DivHome>
  );
};
