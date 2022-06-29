/* eslint-disable react-hooks/rules-of-hooks */
import { Button } from '@mui/material'
import React from 'react'
import { IoAddCircleSharp, IoSearchOutline,IoFilterOutline } from 'react-icons/io5'
import Logo from '../../logo/logo'
import { useStyles } from './style'
import { useUI } from '../../../context/uiContext'
import { useTheme } from '../../../context/theme/themeContext'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

const Header: React.FC = () => {

    const { openSidebar, openSearch,setModalView,openModal } = useUI()
    const { toggle }: any | boolean = useTheme()
    const { toggleFunction }:any = useTheme()
    
    function handleOpen(){
         return openSidebar()
    }

    function openSearchFn(){
        return openSearch()
    }

   const handleAddTask = () => {
    setModalView("Add")
    return openModal()
   }
  
    const classes = useStyles()

    return (
        <>
            
            <header className={classes.root}>
                <div className={classes.navbar}>
                    <div className={classes.navitem}>
                        <div className={classes.logo}>
                            <Logo title={"My ToDo List"} />
                        </div>
                        <div className={classes.btnContainer}>
                        <Button
                                aria-label="theme-mode"
                                variant='icon'
                                className={classes.btn}
                                onClick={toggleFunction}
                                >
                                    {
                                        !toggle ? 
                                        <MdLightMode size={30} /> :
                                        <MdDarkMode size={30} />
                                    }
                            </Button>
                            <Button
                                aria-label="search-button"
                                variant='icon'
                                className={classes.btn}
                                onClick={openSearchFn}
                                >
                                <IoSearchOutline size={30} />
                            </Button>
                            <Button
                                aria-label="filter-button"
                                variant='icon'
                                onClick={handleOpen}
                                >
                                <IoFilterOutline size={30} />
                                   
                            </Button>
                            <Button
                                 aria-label="add-logic"
                                 variant='icon'
                                 className={classes.btn}
                                 onClick={handleAddTask}
                                >
                                <IoAddCircleSharp size={30} />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}


export default Header
