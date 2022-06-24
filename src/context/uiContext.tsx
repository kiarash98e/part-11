/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { TodoProvider } from './todos/todoContext'
import { ThemeProvider } from './theme/themeContext'

export interface State{
    displaySearch:boolean
    displaySideBar:boolean
    displayModal:boolean
    toastText?: string
    modalView: string
    modalData: any
}

const initialState = {
    displaySideBar : false,
    displayModal : false,
    displaySearch : false,
    modalView:'Add',
    modalData:null,
    toastText: "",

}


type Action =
  | {
      type: "OPEN_SIDEBAR";
    }
  | {
      type: "CLOSE_SIDEBAR";
    }
  | {
      type: "OPEN_SEARCH";
    }
  | {
      type: "CLOSE_SEARCH";
    }
  | {
      type: "SET_TOAST_TEXT";
      text: ToastText;
    }
  | {
      type: "OPEN_MODAL";
    }
  | {
      type: "CLOSE_MODAL";
    }
  | {
      type: "SET_MODAL_VIEW";
      view: MODAL_VIEWS;
    }
  | {
      type: "SET_MODAL_DATA";
      data: any;
    }
  
  
type MODAL_VIEWS = 
| "Add"
| "Edit"
| "Delete"

type ToastText = string

export const UIContext = React.createContext<State | any>(initialState)
UIContext.displayName = "UIContext"

const uiReducer = ( state:State, action:Action ) => {
    switch (action.type) {

        case "OPEN_MODAL": {
            return {
                ...state,
                displayModal: true,
                displaySideBar: false,

            }
        }   
        case "CLOSE_MODAL": {
            return {
                ...state,
                displayModal: false
            }
        }
        case "OPEN_SEARCH": {
            return {
                ...state,
                displaySearch: true
            }
        }
        case "CLOSE_SEARCH": {
            return {
                ...state,
                displaySearch: false
            }
        }
        case "OPEN_SIDEBAR": {
            return {
                ...state,
                displaySideBar: true
            }
        }
        case "CLOSE_SIDEBAR": {
            return {
                ...state,
                displaySideBar: false
            }
        }
        case "SET_MODAL_VIEW": {
            return {
                ...state,
                modalView: action.view
            }
        }
        case "SET_MODAL_DATA":{
            return {
                ...state,
                modalData:action.data,
            }
        }
        case "SET_TOAST_TEXT": {
            return {
                  ...state,
                  toastText: action.text
            }
        }
        default:
            return state
    }
}

const UIProvider:React.FC<any> = (props) =>  {
    
    const [state, dispatch] = React.useReducer(uiReducer, initialState)
    
    const openModal = () => dispatch({ type:'OPEN_MODAL' })
    const closeModal = () => dispatch({ type:'CLOSE_MODAL' })
    const openSearch = () => dispatch({ type:'OPEN_SEARCH' })
    const closeSearch = () => dispatch({ type:'CLOSE_SEARCH' })
    const openSidebar = () => dispatch({ type: "OPEN_SIDEBAR" })
    const closeSidebar = () => dispatch({ type: "CLOSE_SIDEBAR" })
    const toggleSidebar = () =>
        state.displaySideBar
            ? dispatch({ type: "CLOSE_SIDEBAR" })
            : dispatch({ type: "OPEN_SIDEBAR" })

    const setModalView = (view: MODAL_VIEWS) => dispatch({ type: "SET_MODAL_VIEW", view })
    const setModalData = (data: any) => dispatch({ type: "SET_MODAL_DATA", data })
        
          
    const value = React.useMemo(
        () => ({
            ...state,
            closeModal,
            openModal,
            openSearch,
            openSidebar,
            closeSearch,
            closeSidebar,
            toggleSidebar,
            setModalData,
            setModalView,
        }),
        [state]
    )

    return <UIContext.Provider value={value} {...props} />
}

export const useUI = () => {
    const context = React.useContext(UIContext)
    if (context === undefined) {
      throw new Error(`useUI must be used within a UIProvider`)
    }
    return context
}

export const ManagedUIContext: React.FC<any> = ({ children }) => (
    <ThemeProvider>
        <TodoProvider>
            <UIProvider>{children}</UIProvider>
        </TodoProvider>  
    </ThemeProvider>
);
