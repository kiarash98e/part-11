/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Header from "../layout/header/index";
import Main from '../layout/main/index';
import { makeStyles } from '@mui/styles'
import { useTheme } from '../../context/theme/themeContext'

const useStyles = makeStyles({
    layout:{
        display: 'flex',
        flexDirection:"column",
        minHeight:"100vh",
        width:'100%',
    }
})

const Layout: React.FC = () => {

  
  const classes = useStyles()

  const { toggle } : any | boolean = useTheme()

  return(
    <>
      <div className={classes.layout}
       style={{
        background: toggle ? "#212121" : "#FFF"
       }}
      >
        
        <Header />
        <Main>

        </Main>
      </div>
    </>
  )
};

export default Layout;
