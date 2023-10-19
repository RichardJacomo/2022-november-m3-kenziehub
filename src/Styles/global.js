import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: 'Inter', sans-serif;
}

  :root {
  --color-primary: #FF577F;
  --color-primary-2: #FF427F;
  --color-primary-negative: #59323F

  --grey-4: #121214;
  --grey-3: #212529;
  --grey-2: #343b41;
  --grey-1: #868e96;
  --white: #f8f9fa;

  --negative: #e83f5b;
  --sucess: #3fe864;

  --radius-01: 16px;
  --radius-02: 8px;
  --radius-03: 4px;

  --font-size-1: 24px;
  --font-size-2: 20px;
  --font-size-3: 16px;
  --font-size-4: 14px;
  --font-size-5: 10px;
}
button {
  cursor: pointer;
}
body{
  background-color: #121214;
  display: flex;
  justify-content: center;
}
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1400px;
}
.title{
  margin-top: 76px;
  color: var(--color-primary-2);
  font-size: var(--font-size-1);
}
`;
export default GlobalStyle;
