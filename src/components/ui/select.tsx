/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable no-useless-computed-key */
import React, { SelectHTMLAttributes } from 'react'
import MySelect from 'react-select'

export interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
    name?: string;
    data?: any;
    setFilters?:any;
    filters?:any;
}

const colourStyles = {
    control: (styles:any) => ({
        ...styles,
        backgroundColor: "white",
        borderRadius: "2px",
        "&:hover": { borderColor: "gray" },
        border: "1px solid lightgray",
        cursor: 'pointer',
        boxShadow: "none",
        marginTop:"15px",
      }),
      option: (base: any, { isSelected,isFocused }: any) => ({
        ...base,
        cursor: 'pointer',
        color: isSelected ? "#999" : "",
        fontWeight: isSelected ? "bold" : "normal",
        backgroundColor: isFocused ? "transparent" : "",
        ":hover": {
          backgroundColor: "#f1f1f1",
          color:"#333",
          
        }
      }),
      menu: (styles:any) => ({
        ...styles,
        backgroundColor: "white",
        
      }),
    
}

const Select: React.FC<Props> = ({ name,data,filters,setFilters,value }) => {

    const [select,setSelect] = React.useState({
        name:value,
        label:value
    })
    const handleChang = (e:any) => {
        setSelect({
            ...select,
            ['name']:e.name
        })
         setFilters({
             ...filters,
             [`${name}`]:e.name
         })       
    }

    return (
        <div style={{
            width: "100%",
            height: 91,
        }}>
            <label htmlFor={name}>{name}</label>
            <MySelect  
                id={name}
                styles={colourStyles}
                options={data}
                defaultValue={select.name ? select : data[0]}
                onChange={handleChang}
                placeholder={`select ${name}`}
            />
        </div>
    )
}

export default Select