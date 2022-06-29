import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme:Theme) =>
    ({
        overlay:{
            background:"rgba(0,0,0,.35)",
            zIndex:1000,
            visbility:'hidden',
            height:"100%",
            width:"100%",
            position: 'fixed',
            transition:" 0.35s ease-in-out",
            top:0,
            left:0,
            display: 'none',
        },
        drawerSearch:{
          transform: "translate(-50%, 50px)",
          position: 'relative',
          top:0,
          left:"50%",
          visibility:"hidden",
          transition:".3s ease-in-out",
          width:"100%",
          zIndex:1050,
          display: 'none',
          paddingRight: "16px",
          paddingLeft: "16px",
          [theme.breakpoints.up("lg")]:{ width:"100%" },
        },
        form:{
            position: 'relative',
            padding:"0 35px 0 5px",
            overflow: "hidden",
            background:"#FFF",
            width:"100%",
            marginTop:"12px",

        },
        label:{
            display: 'flex',
            width:"95%",
            alignItems: 'center',
            padding:"2px 0 2px 0",
            borderRadius:"28px",
            backgroundColor:theme.palette.grey[100],
            border:0,
            [theme.breakpoints.down("lg")]:{width:"96%"},
        },
        searchLogo:{
          display: 'flex',
          flexShrink:0,
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          height:"100%",
          width:"45px",
          border:0,
          [theme.breakpoints.up("md")]:{
            width:"56px"
          },
          "&:focus":{
            outline:"none",
          },
        },
        searchInput:{
		    color:"#212121",
            background:"transparent",
            outline:"none",
            width:"92%",
            height:"45px",
            font:"14px",
            border:0,
            marginRight:"13px",
            [theme.breakpoints.up("lg")]:{
                font:"16px",
            },
            "&:placeholder":{
                color: theme.palette.grey[400]
            },
        },
        searchClose:{
            outline: "2px solid transparent",
            fontSize:"24px",
            cursor: 'pointer',
            border:0,
            [theme.breakpoints.up("md")]:{
                fontSize:"30px",
                width:"56px"
            },
            color:theme.palette.grey[400],
            position: 'absolute',
            background:'transparent',
            top:0,
            right:0,
            width:"45px",
            height:"100%",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition:"all .34s ease-in-out",
            "&:hover":{
                color:"#212121"
            },
            
        },
        open:{
          
          display: 'flex',
          visibility: "visible"
        },
        open1:{
            position: 'fixed',
            top:0,
            display: 'block',
            visibility: 'visible',
            transform: "translate(-50%, 0)",
            backgroundColor: "#fff",
            minHeight: "110px",
          
          
        },
    })
)

export { useStyles }

