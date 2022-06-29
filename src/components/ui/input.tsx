import React from 'react'
import { TextField } from '@mui/material'

interface IInput {
    value:string,
    name:string,
    onChange:(e:React.ChangeEvent) => void
    label:string,
    defaultValue?: string | undefined,
    errorText?: string,
    placeHolder:string | undefined,
    style?:any,
    variant?:any,
}

const Input:React.FC<IInput> = ({
    
    value,
    onChange,
    name,
    label,
    defaultValue,
    style,
    variant,
    placeHolder
}) => {
    
    
    return (
        <>
            <TextField
                fullWidth
                label={label}
                sx={{
                  
                    color:"#212121",
                    borderBottom:"1px solid #999",
                    bgcolor:"transparent",
                    "::placeholder":"#999",
                    outline:"none",
                    ".MuiInputLabel-root":{
                        p:0,
                        m:0,
                    }
                    
                }}
                style={style}
                variant={variant}
                value={value}
                onChange={onChange}
                name={name}
                defaultValue={defaultValue ? defaultValue : undefined}
                placeholder={placeHolder}
                
          
            /> 
        </>
    )
}

export default Input
