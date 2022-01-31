import  ReactLoading, {  LoadingType }  from "react-loading"

import React from 'react';

interface ILoadingProps {
  type: LoadingType
  color: string;
  w: number;
  h: number
}

export const Loading = ({type, color, w, h}: ILoadingProps) => {
  return <ReactLoading type={type} color={color} height={h} width={w} />;
};
