import React from 'react'
import { WrapperListStyled, WrapperTitleListStyled } from "./styles"
import {FaReact} from "react-icons/fa"






export const WrapperListComponet = ({ children, titles, columns }:{ children: React.ReactNode, titles: string[], columns: number[] }) => {


  
  return (
    <WrapperListStyled className='wrapper-List'  >
      <WrapperTitleListStyled columns={columns} >
        <FaReact className='reactjs-icon' />
        {titles.map( (title, i) => <p key={i}>{title}</p> )}
      </WrapperTitleListStyled>
      {children}
    </WrapperListStyled>
  )
}
