import {createGlobalStyle} from "styled-components"


export const GlobalStyles = createGlobalStyle`

:root {
  --white: #ededed;
  --black: #060709;
  --salmon-200: #d9c7ae;
  --gray-200: #9a9c9e;
  --gray-400: #5d5e62;
  --brown: #4e3a38;
  --blue: #0390d5;
  /* --violet: #5443d7; */
  --salmon-400: #a37f7e;
  --text: #252b38;
}

body{
  font-family: 'Roboto', sans-serif;
  background-color: var(--white);
}

li{
  list-style: none;
}

a{
  text-decoration: none;
  color: inherit;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

button{
  cursor: pointer;
}


`;