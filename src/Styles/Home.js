import styled from "styled-components";

export const DivHome = styled.div`
  color: white;
  display: flex;
  flex-direction: column;

  .main-content {
    position: relative;
  }

  .div-name-and-description {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--grey-2);
    padding: 30px 10px 30px 10px;
  }
  .name-profile {
    font-size: var(--font-size-2);
  }
  .description-profile {
    font-size: var(--font-size-4);
    color: var(--grey-1);
  }
  .div-title-tech {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 10px 8px 10px;
  }
  .title-tech {
    font-size: var(--font-size-2);
    padding: 10px 0 10px 0;
  }
  .button-tech-add {
    background-color: var(--grey-2);
    border: none;
    padding: 4px;
    color: white;
    font-size: 18px;
    font-weight: 600;
    border-radius: var(--radius-03);
  }
  .button-tech-add:hover {
    background-color: var(--grey-1);
  }
  .ul-tech {
    background-color: var(--grey-2);
    padding: 20px;
    width: 100%;
  }
  .li-tech {
    background-color: #121214;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 45px;
    padding: 10px;
    border-radius: var(--radius-03);
    width: 100%;
  }
  .li-tech:hover {
    background-color: var(--grey-3);
  }
  .div-level-and-delete {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  .tech {
    font-size: var(--font-size-3);
  }
  .text-level {
    font-size: var(--font-size-4);
    color: var(--grey-1);
  }
  .button-delete {
    background-color: var(--grey-4);
    border: none;
  }
  .button-delete:hover {
    background-color: var(--grey-1);
    border-radius: var(--radius-03);
  }
  @media (max-width: 800px) {
    .div-name-and-description {
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
    }
  }
`;
