/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Header from "../layout/header/index";
import Main from '../layout/main/index';
import { makeStyles } from '@mui/styles'
import { useTheme } from '../../context/theme/themeContext'
import { useTodo } from '../../context/todos/todoContext'
import { RcTable } from '../rcTable/rcTable';
import { Box } from '@mui/material';

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
  const { items , isEmpty } : any  = useTodo()

  const headCells = [
    {
      id: 'task',
      numeric: false,
      disablePadding: true,
      label: 'Task name',
      type: 'string'
    },
    {
      id: 'status',
      numeric: false,
      disablePadding: false,
      label: 'Status',
      type: "string"
    },
    {
      id: 'priority',
      numeric: false,
      disablePadding: false,
      label: 'Priority',
      type: "string"
    },
    {
      id: 'deadline',
      numeric: false,
      disablePadding: false,
      label: 'Deadline',
      dateSetting: { locale: "fa", format: "YYYY/MM/DD" }
    },
    {
      id: 'actions',
      numeric: false,
      disablePadding: false,
      label: 'Actions',
    },
  ]
  

  return(
    <>
      <div className={classes.layout}
       style={{
        background: toggle ? "#212121" : "#FFF"
       }}
      >
        
        <Header />
        <Main>
            <Box
              sx={{
                width:"100%",
                height:"100%",
                p:4
              }}
            >
                <RcTable 
                  toggle={toggle} 
                  isEmpty={isEmpty} 
                  data={items} 
                  headCells={headCells}
                />
            </Box>
        </Main>
      </div>
    </>
  )
};

export default Layout;
