import styled from "styled-components";


export const SearchFormStyled = styled.form`
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 30px;
  border-radius: 5px;
  border: 1px solid var(--gray-200);


  label{
    width: 40%;
    margin-right: 10px;
  }

  button{
    max-width: 200px;
  }

`;