import  ReactLoading, {  LoadingType }  from "react-loading"
import { LoadContainer } from "./styles";

import React from 'react';

interface ILoadingProps {
  type: LoadingType
  color: string;
  w: number;
  h: number
  load: boolean;
}

export const Loading = ({type, color, w, h, load}: ILoadingProps) => {
  return(
    <LoadContainer load={load}>
      <ReactLoading  type={type} color={color} height={h} width={w} />
    </LoadContainer>
    ) 
  };
