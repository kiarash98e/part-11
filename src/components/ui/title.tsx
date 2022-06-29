import React from 'react'
import { styled } from '@mui/system'
import { purple } from '@mui/material/colors'


interface TitleProps {
    title:string
}

const MyTitle = styled("div")(
    {
        marginBottom: "12px",
        textAlign:"center",
        padding:"16px 0 16px 0",
        fontWeight:"bold",
        color: purple[500]
    }
)

const Title:React.FC<TitleProps> = ({title}) => {
    return(
        <MyTitle>{title}</MyTitle>     
    )
}

export default Title