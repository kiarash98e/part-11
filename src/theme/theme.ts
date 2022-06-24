/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { createTheme } from '@mui/material'
import { Theme } from '@mui/material/styles/createTheme'
import tinycolor from "tinycolor2";

const primary = "#fff";
const secondary = "#FF5C93";
const warning = "#FFC260";
const success = "#3CD4A0";
const info = "#9013FE";

const lightenRate = 7.5;
const darkenRate = 35;
  
  declare module "@mui/material/styles/createTheme" {
    interface ThemeOptions extends MyColor {}
  }

  declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
      icon: true;
      flat: true;
    }
  }
  
interface ColorTheme {
    [key:string]: string
}


export interface MyColor extends Theme {
    
    colors?:{
        [key:string]: string | ColorTheme
    },
    Spacing?:string[] | string
    
}


const theme:MyColor = createTheme({
    
    breakpoints: {
        values: {
          xs: 0,
          sm: 480,
          md: 769,
          lg: 1200,
          xl: 1920,
          
        }
      }, 
    Spacing:[
        '430px',
        '450px',
        '500px',
        '64vh',
    ],
    components: {
        MuiButton: {
          variants:[
            {
              props: { variant: "icon" },
              style: {
                display: 'flex',
                cursor: 'pointer',
                width:"auto",
                marginBottom:"5px",
                justifyContent: 'center',
                alignItems: 'center',
                paddingInlineEnd:"8px",
                paddingInlineStart:"8px",
                flexShrink:0,
                padding:0,
                height:'auto',
                position:"relative",
                fontWeight: "bold",
                color: "#fff",
                background:'transparent',
                "&:focus":{
                  outline: "2px solid transparent" ,
                  outlineOffset: "2px",
                }
              }
            },
            {
              props: { variant: "flat" },
              style: {
                display: 'flex',
                width:"auto",
                marginBottom:"5px",
                justifyContent: 'center',
                alignItems: 'center',
                paddingInlineEnd:"21px",
                paddingInlineStart:"21px",
                flexShrink:0,
                padding:0,
                cursor: 'pointer',
                height:'auto',
                position:"relative",
                border: `4px solid black`,
                color: "#fff",
                background:'#00ad4e',
                "&:focus":{
                  outline: "2px solid transparent" ,
                  outlineOffset: "2px",
                }
              }
            },
          ],
          defaultProps: {
            disableElevation: true
          },
          styleOverrides: {
            root: {
              textTransform: 'none'
            },
            sizeSmall: {
              padding: '6px 16px'
            },
            sizeMedium: {
              padding: '8px 20px'
            },
            sizeLarge: {
              padding: '11px 24px'
            },
            textSizeSmall: {
              padding: '7px 12px'
            },
            textSizeMedium: {
              padding: '9px 16px'
            },
            textSizeLarge: {
              padding: '12px 16px'
            }
          }
        },
        MuiButtonBase: {
          defaultProps: {
            disableRipple: true
          }
        },
        MuiCardContent: {
          styleOverrides: {
            root: {
              padding: '32px 24px',
              '&:last-child': {
                paddingBottom: '32px'
              }
            }
          }
        },
        MuiCardHeader: {
          defaultProps: {
            titleTypographyProps: {
              variant: 'h6'
            },
            subheaderTypographyProps: {
              variant: 'body2'
            }
          },
          styleOverrides: {
            root: {
              padding: '32px 24px'
            }
          }
        },
        MuiCssBaseline: {
          styleOverrides: {
            '*': {
              boxSizing: 'border-box',
              margin: 0,
              padding: 0
            },
            html: {
              MozOsxFontSmoothing: 'grayscale',
              WebkitFontSmoothing: 'antialiased',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100%',
              width: '100%'
            },
            body: {
              display: 'flex',
              flex: '1 1 auto',
              flexDirection: 'column',
              minHeight: '100%',
              width: '100%',
              
            },
            '#__next': {
              display: 'flex',
              flex: '1 1 auto',
              flexDirection: 'column',
              height: '100%',
              width: '100%'
            }
          }
        },
        MuiOutlinedInput: {
          styleOverrides: {
            notchedOutline: {
              borderColor: '#E6E8F0'
            }
          }
        },
        MuiTableHead: {
          styleOverrides: {
            root: {
              backgroundColor: '#F3F4F6',
              '.MuiTableCell-root': {
                color: '#374151'
              },
              borderBottom: 'none',
              '& .MuiTableCell-root': {
                borderBottom: 'none',
                fontSize: '12px',
                fontWeight: 600,
                lineHeight: 1,
                letterSpacing: 0.5,
                textTransform: 'uppercase'
              },
              '& .MuiTableCell-paddingCheckbox': {
                paddingTop: 4,
                paddingBottom: 4
              }
            }
          }
        }
      },
    palette: {
        grey:{
            50: '#FBFBFB',
            100: '#F1F1F1',
            200: '#F9F9F9',
            300: '#E6E6E6',
            400: '#999999',
            500: '#D8D8D8',
            600: '#3A3A3A',
            700: '#292929',
            800: '#707070',
        },
        action: {
            active: '#6B7280',
            focus: 'rgba(55, 65, 81, 0.12)',
            hover: 'rgba(55, 65, 81, 0.04)',
            selected: 'rgba(55, 65, 81, 0.08)',
            disabledBackground: 'rgba(55, 65, 81, 0.12)',
            disabled: 'rgba(55, 65, 81, 0.26)'
        },
        background: {
        
          default: '#F9FAFC',
          paper: '#FFFFFF',
          
        },
        divider: '#E6E8F0',
        primary: {
            main: primary,
            light: tinycolor(primary)
              .lighten(lightenRate)
              .toHexString(),
            dark: tinycolor(primary)
              .darken(darkenRate)
              .toHexString(),
          },
          secondary: {
            main: secondary,
            light: tinycolor(secondary)
              .lighten(lightenRate)
              .toHexString(),
            dark: tinycolor(secondary)
              .darken(darkenRate)
              .toHexString(),
            contrastText: "#FFFFFF",
          },
          warning: {
            main: warning,
            light: tinycolor(warning)
              .lighten(lightenRate)
              .toHexString(),
            dark: tinycolor(warning)
              .darken(darkenRate)
              .toHexString(),
          },
          success: {
            main: success,
            light: tinycolor(success)
              .lighten(lightenRate)
              .toHexString(),
            dark: tinycolor(success)
              .darken(darkenRate)
              .toHexString(),
          },
          info: {
            main: info,
            light: tinycolor(info)
              .lighten(lightenRate)
              .toHexString(),
            dark: tinycolor(info)
              .darken(darkenRate)
              .toHexString(),
          },
        error: {
          main: '#D14343',
          light: '#DA6868',
          dark: '#922E2E',
          contrastText: '#FFFFFF'
        },
        
        text: {
          primary: '#121828',
          secondary: '#65748B',
          disabled: 'rgba(55, 65, 81, 0.48)'
        }
      },
    shape: {
        borderRadius: 8
      },
    shadows: [
        'none',
        '0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)',
        '0px 1px 2px rgba(100, 116, 139, 0.12)',
        '0px 1px 4px rgba(100, 116, 139, 0.12)',
        '0px 1px 5px rgba(100, 116, 139, 0.12)',
        '0px 1px 6px rgba(100, 116, 139, 0.12)',
        '0px 2px 6px rgba(100, 116, 139, 0.12)',
        '0px 3px 6px rgba(100, 116, 139, 0.12)',
        '0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)',
        '0px 5px 12px rgba(100, 116, 139, 0.12)',
        '0px 5px 14px rgba(100, 116, 139, 0.12)',
        '0px 5px 15px rgba(100, 116, 139, 0.12)',
        '0px 6px 15px rgba(100, 116, 139, 0.12)',
        '0px 7px 15px rgba(100, 116, 139, 0.12)',
        '0px 8px 15px rgba(100, 116, 139, 0.12)',
        '0px 9px 15px rgba(100, 116, 139, 0.12)',
        '0px 10px 15px rgba(100, 116, 139, 0.12)',
        '0px 12px 22px -8px rgba(100, 116, 139, 0.25)',
        '0px 13px 22px -8px rgba(100, 116, 139, 0.25)',
        '0px 14px 24px -8px rgba(100, 116, 139, 0.25)',
        '0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)',
        '0px 25px 50px rgba(100, 116, 139, 0.25)',
        '0px 25px 50px rgba(100, 116, 139, 0.25)',
        '0px 25px 50px rgba(100, 116, 139, 0.25)',
        '0px 25px 50px rgba(100, 116, 139, 0.25)'
      ],
    typography: {
        button: {
          fontWeight: 600
        },
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
        body1: {
          fontSize: '1rem',
          fontWeight: 400,
          lineHeight: 1
        },
        body2: {
          fontSize: '1.5rem',
          fontWeight: 400,
          lineHeight: 1.2
        },
        
        subtitle1: {
          fontSize: '1.75rem',
          fontWeight: 500,
          lineHeight: 1.5
        },
        subtitle2: {
          fontSize: '0.875rem',
          fontWeight: 500,
          lineHeight: 1.57
        },
        overline: {
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.5px',
          lineHeight: 2.5,
          textTransform: 'uppercase'
        },
        caption: {
          fontSize: '0.75rem',
          fontWeight: 400,
          lineHeight: 1.66
        },
        h1: {
          fontWeight: 700,
          fontSize: '3rem',
          lineHeight: 1.6
        },
        h2: {
          fontWeight: 700,
          fontSize: '2rem',
          lineHeight: 1.5
        },
        h3: {
          fontWeight: 700,
          fontSize: '1.75rem',
          lineHeight: 1.4
        },
        h4: {
          fontWeight: 700,
          fontSize: '1.5rem',
          lineHeight: 1.3
        },
        h5: {
          fontWeight: 600,
          fontSize: '1rem',
          lineHeight: 1.25
        },
        h6: {
          fontWeight: 600,
          fontSize: '1.125rem',
          lineHeight: 1.1
        }
      },
    
    colors:{
        body: '#5A5A5A',
        heading: '#212121',
        green: '#00ad4e' ,
        input: '#1D1E1F',
        black: '#000',
        white: '#fff',
        linen: '#FBF1E9',
        linenSecondary: '#ECE7E3',
        olive: '#3D9970',
        maroon: '#B03060',
        brown: '#C7844B',
        placeholder: '#707070',
        borderBottom: '#f7f7f7',
        facebook: '#4267B2',
        facebookHover: '#395fad',
        google: 'rgb(0, 119, 242)',
        greenSky:'#52b788',
        googleHover: '#307bf9',
        greyShadwo:"#F4F4F4",
        greyBack:"#E9ECEF"
      }
})

export default theme