import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme:any) =>
    ({
        root:{
            display: 'flex',
            width: "100%",
            position:"relative",
            zIndex:900,
            height: '4rem',
            [theme.breakpoints.up('sm')]:{
                height: "5rem",
                
            },
            [theme.breakpoints.up('md')]:{
                height: "6rem",
                
            },
        },
        navbar:{
           color: theme!.colors!.white,
           background: theme!.colors!.green,
           width: "100%",
           position:"fixed",
           padding:theme.spacing(3,1,3,1),
           [theme.breakpoints.up('md')]:{
               paddingLeft: theme.spacing(0),
               paddingRight: theme.spacing(0),
           
            },
           [theme.breakpoints.up('lg')]:{
               paddingLeft: theme.spacing(4),
               paddingRight: theme.spacing(4),
            
            },  
        },
        navitem:{
            width: "100%",
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
            display: 'flex',
            justifyContent: 'space-between',
            alignItems:"center",
            marginRight:"auto",  
            marginLeft:"auto",
            maxWidth:"1920px",  
         },
        logo:{
            display: 'flex',
            
        },
        btnContainer:{
            display: 'flex',
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
            [theme.breakpoints.up('md')]:{
               paddingLeft: theme.spacing(1),
               paddingRight: theme.spacing(1),
            
            },  
        },
        btn:{
            width:'5px',
            height:"5px",
            [theme.breakpoints.up("md")]:{
                width:'5px',
                height:"5px",
            },
            [theme.breakpoints.up("xl")]:{
                width:'5px',
                height:"5px",
            },
        }
    })
)

export { useStyles }