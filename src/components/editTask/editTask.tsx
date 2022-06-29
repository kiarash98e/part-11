import React from 'react'
import Title from '../ui/title'
import Input from '../ui/input'
import { DatePicker } from "jalali-react-datepicker";
import Select from '../ui/select'
import { useTodo } from '../../context/todos/todoContext';
import { ITask } from '../../context/todos/todosFn';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles'
import { useUI } from '../../context/uiContext';

const status = [
    {name:'status',label:"status"},
    {name:'todo',label:"todo"},
    {name:'done',label:"done"},
    {name:'doing',label:"doing"},
]



const priority = [
    {name:"priority",label:"priority"},
    {name:"low",label:"low"},
    {name:"high",label:"high"},
    {name:"medium",label:"medium"},
] 



const useStyles = makeStyles({
    date:{
        cursor: 'pointer',
        width:"100%",
        height:"48px",
        paddingLeft:"5px",
        border: "1px solid lightgray",
        borderRadius:"2px",
        ":hover":{
            borderColor:"grey",
        }
    }

})


const AddTask:React.FC<any> = () => {

    const { editTask } : any = useTodo()
    const { closeModal,modalData } = useUI()
    const { item } = modalData
    const [filters, setFilters] = React.useState<ITask | any>(item)

    console.log(filters)

    const handleDateChange = (e: any) => {
        setFilters({
          ...filters,
          ["deadline"!]: e.value._d,
        })
    }

    const handleSubmit1 = (e:React.ChangeEvent) => {
        const { value, name } = e.target as HTMLInputElement

        setFilters({
            ...filters,
            [name]:value,     
        })
    }

    const editTodo = () => {
        setFilters({})
        editTask(filters,filters!.id)
        return closeModal()
    }
    
    const cancel = () => {
        setFilters({})
        return closeModal()
        
    }
    
    const classes = useStyles()

    return (
        <form 
            noValidate
        >
            <div style={{marginBottom:"15px" , padding:"16px 0 16px 0"}}>
                <Title title='New Task'/>
            </div>
            <div style={{margin:"0 15px 15px 15px"}}>
                <Input
                    label='Task'
                    name='task'
                    value={filters!.task}
                    placeHolder='add task ...'
                    variant='filled'
                    onChange={handleSubmit1}
                />
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding:"10px",
                    backgroundColor:"white",
                    marginBottom:"5px",
                    width:"100%"
                }}>
                <Select 
                    filters={filters}
                    setFilters={setFilters}
                    data={status} 
                    name="status" 
                    value={filters!['status']}
                />   
                <Select 
                    filters={filters}
                    setFilters={setFilters}
                    data={priority}  
                    name="priority" 
                    value={filters!['priority']} 
                />   
            </div>
            <div style={{
                margin:"0 0 43px 0",
                cursor: 'pointer',
            }}>
                <DatePicker
                    className={classes.date}
                    timePicker={false}
                    value={filters!['deadline']}
                    onClickSubmitButton={handleDateChange}
                    
                />     
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding:"10px"
                }}
            >
                <Button variant='outlined' style={{background:"#2ab4aa",width:"110px"}} color='primary' onClick={editTodo} > edit </Button>
                <Button variant='text' color='secondary' onClick={cancel} > cancel </Button>

            </div>
        </form>
  )
}

export default AddTask