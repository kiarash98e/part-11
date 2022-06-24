import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme:any) =>
    ({
       modalContainer:{
        background: "rgba(0,0,0,.7)",
        position: 'fixed',
        top:0,
        left:0,
        right:0,
        bottom:0,
        zIndex: 1010,
	    padding: theme.spacing(2),
        [theme.breakpoints.up("md")]:{
            padding:20,
        }
       },
       modalBackDrop:{
        backdropFilter: "blur(4px)",
       },
       modalBtn:{
        width:'24px',
        height:'24px',
        top:'15px',
        left:"15px",
        [theme.breakpoints.up("md")]:{
            width:"32px",
            height:"32px",
        },
        position: 'fixed',
        zIndex:10,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:"100%",
        background:theme.colors.white,
        boxShadow: theme.shadows(5),
        color:theme.palette.grey[600],
        transition:"all 200ms ease-in-out",
        "&:focus":{
            outline:"none",
            color:theme.palette.grey[800],
            boxShadow: theme.shadows(7),
            
        },
        "&:hover":{
            boxShadow: theme.shadows(7),
            color:theme.palette.grey[800],
        },

       },
       modalContent:{
        position: 'relative',
        marginLeft: "auto",
        marginLight: "auto",
        height:"auto",
        width:"auto",
       },
       modalDialog:{
        width:"100%",
        [theme.breakpoints.up("md")]:{
            width:"auto",
        },
        boxShadow:theme.shadows(6),
        left:"50%",
        top:"50%",
        position: 'absolute',
        transform: 'translateX(-50%,-50%)',
        borderRadius:"20px",
        heigth:"auto",
        maxHeight:"100vh",
       },
    })
)

export { useStyles }