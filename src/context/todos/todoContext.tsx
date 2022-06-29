import React from "react"
import { useLocalStorage } from "../../customHock/use-local-storage"
import { todoReducer, State, intialState } from "./todoReducer"
import { ITask } from "./todosFn"

interface TodoProviderState extends State {
  addTask: (item:ITask) => void
  removeTask: (id:ITask['id']) => void
  editTask: (item:ITask,id:ITask['id']) => void
  filterTask: (search:string) => void
  filterTaskBySelect: (filters:any) => void
  setTodo: (todo:any) => void
}
export const todoContext = React.createContext<TodoProviderState | undefined>(
  undefined
)

todoContext.displayName = "TodoContext"

export const useTodo = () => {
  const context = React.useContext(todoContext)
  if (context === undefined) {
    throw new Error(`usetodo must be used within a TodoProvider`)
  }
  return context;
}

export const TodoProvider: React.FC<any> = (props) => {

  const [savedTodo, saveTodo] = useLocalStorage(
    `todos`,
    JSON.stringify(intialState)
  );
  const [state, dispatch] = React.useReducer(
    todoReducer,
    JSON.parse(savedTodo!)
  );


  React.useEffect(() => {
    saveTodo(JSON.stringify(state));
  }, [state, saveTodo]);


    const addTask = (item:ITask) => dispatch({type:"ADD_ITEM",item})
    const removeTask = (id:ITask["id"]) => dispatch({type:"REMOVE_ITEM",id})
    const editTask = (item:ITask,id:ITask["id"]) => dispatch({type:"EDIT_ITEM",id,item})
    const filterTask = (search:string) => dispatch({type:"SEARCH_ITEM",search})
    const filterTaskBySelect = (filters:any) => dispatch({type:"SELECT_ITEM",filters})
    const setTodo = (todo:any) => dispatch({type:"SET_TODO",todo})
    
    const value = React.useMemo(
        () => ({
          ...state,
          addTask,
          editTask,
          removeTask,
          filterTask,
          filterTaskBySelect,
          setTodo,
        }),
        [state]
    )

  return <todoContext.Provider value={value} {...props} />;
  };
 