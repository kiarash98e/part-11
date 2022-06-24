/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useStyles } from './style'

const main:React.FC<any> = ({children}) => {


    const classes = useStyles()

    return (
        <main
          className={classes.main}
          style={{
            minHeight: "-webkit-fill-available",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {children}
        </main>
    )
}

export default main
