import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--grey-3);
  margin-top: 25px;
  width: 30%;
  padding: 0 20px 0 20px;
  max-width: 400px;
  min-width: 300px;

  .login {
    margin-top: 30px;
    margin-bottom: 20px;
    color: white;
    font-size: var(--font-size-3);
  }
  .div-email {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .div-pass {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  input {
    width: 100%;
    background-color: var(--grey-2);
    margin-bottom: 20px;
    height: 40px;
    border-radius: var(--radius-03);
    border: 1px solid var(--grey-1);
    color: var(--white);
    padding-left: 10px;
  }
  input:focus {
    border-color: var(--color-primary);
    outline: 0;
  }
  button {
    width: 100%;
    margin-bottom: 20px;
    height: 40px;
    border-radius: var(--radius-03);
    border: none;
  }
  .button-register {
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
    border-radius: var(--radius-03);
    background-color: var(--grey-1);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: var(--font-size-4);
  }
  .button-register:hover {
    background-color: var(--grey-2);
  }
  label {
    color: white;
    font-size: var(--font-size-5);
    margin-bottom: 10px;
  }
  .advice {
    color: var(--grey-1);
    font-size: var(--font-size-5);
    margin-bottom: 10px;
  }
  .error-msg {
    color: var(--negative);
    font-size: var(--font-size-5);
    text-align: center;
    font-weight: 600;
    width: 100%;
    margin-bottom: 10px;
  }
`;
