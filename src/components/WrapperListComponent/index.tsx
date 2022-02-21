import React from 'react'
import { WrapperListStyled, WrapperTitleListStyled } from "./styles"
import {FaReact} from "react-icons/fa"




export const WrapperListComponet = ({ children, titles }:{ children: React.ReactNode, titles: string[] }) => {





  return (
    <WrapperListStyled className='wrapper-List'>
      <WrapperTitleListStyled TitleLegth={titles.length}>
        <FaReact className='reactjs-icon' />
        {titles.map( (title, i) => <p key={i}>{title}</p> )}
      </WrapperTitleListStyled>
      {children}
    </WrapperListStyled>
  )
}
