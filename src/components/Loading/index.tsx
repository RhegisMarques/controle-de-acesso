import  ReactLoading, {  LoadingType }  from "react-loading"
import { LoadContainer } from "./styles";

import React from 'react';
import { GlobalContext } from "../../contexts/GlobalContext";

interface ILoadingProps {
  type: LoadingType
  color: string;
  w: number;
  h: number
}

export const Loading = ({type, color, w, h}: ILoadingProps) => {
  const {load} = React.useContext(GlobalContext)

  return(
    <LoadContainer className={load ? "visibled" : ""}>
      <ReactLoading  type={type} color={color} height={h} width={w} />
    </LoadContainer>
    ) 
  };
