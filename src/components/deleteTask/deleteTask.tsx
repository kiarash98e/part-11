import { Button, Divider, Typography } from '@mui/material';
import React from 'react'
import { useTodo } from '../../context/todos/todoContext';
import { useUI } from '../../context/uiContext';
import Title from '../ui/title';

const DeleteTask:React.FC<any> = () => {

    const { removeTask } : any = useTodo()
    const { closeModal,modalData } = useUI()

    const { item } = modalData
    
    const deleteTodo = () => {
        removeTask(item!.id)
        return closeModal()
    }
    
    const cancel = () => {
        return closeModal()    
    }
    
   
    return (
        <>
            <div style={{marginBottom:"15px" , padding:"16px 0 16px 0"}}>
                <Title title='Delete Task'/>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding:"10px"
                }}
            >

                <Typography variant='h3' component={"h3"} style={{textTransform:"uppercase"}}>
                    are you sure delete task ?
                </Typography>
                <Divider color="grey" />
                <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding:"10px"
                }}
            >
                <Button variant='outlined' style={{background:"#2ab4aa",width:"110px"}} color='primary' onClick={deleteTodo} > delete </Button>
                <Button variant='text' color='secondary' onClick={cancel} > cancel </Button>

            </div>
            </div>
        </>
  )
}

export default DeleteTask