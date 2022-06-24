/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { IoApps } from 'react-icons/io5'
import { makeStyles } from '@mui/styles'
import theme from '../../theme/theme'

interface ILogo {
    title:string
}

const useStyles = makeStyles({
    logo:{
        paddingInlineStart:theme.spacing(2),
        margin:"3px",
    },
})

const logo: React.FC <ILogo> = ({title}) => {

    const classes = useStyles()
    return (
        <>
            <IoApps size={30}/>
            <h3 className={classes.logo}>{title}</h3>  
        </>
    )
}

export default logo
