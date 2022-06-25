import {
    UpdateItemInput,
    addTask,
    removeTask,
    editTask,
    taskCount,
    ITask,
    setTodo   
} from './todosFn'


type Action =
  | { type: "ADD_ITEM"; item: ITask }
  | { type: "EDIT_ITEM"; id: ITask["id"]; item: UpdateItemInput }
  | { type: "REMOVE_ITEM"; id: ITask["id"] }
  | { type: "SET_TODO",todo:any }

  export interface State {
    items: ITask[];
    isEmpty: boolean;
    count: number;
  }

  export const intialState : State = {
    items:[{
        id: 0,
        task: "",
        status: "status",
        priority: "priority",
        deadline: new Date()
    }],
    isEmpty: true,
    count : 0
  }


  export function todoReducer(state: State, action: Action): State {
    switch (action.type) {
      case "ADD_ITEM": {
        const items = addTask(state.items, action.item);
        return generateFinalState(state, items);
      }
      case "REMOVE_ITEM": {
        const items = removeTask(state.items, action.id );
        return generateFinalState(state, items);
      }
      case "EDIT_ITEM": {
        const items = editTask(state.items, action.item, action.id);
        return generateFinalState(state, items)
      }
      case "SET_TODO":
        return setTodo(state,action.todo)
      default:
        return state
    }
  }

  const generateFinalState = (state: State, items: ITask[]) => {
    const totalUniqueItems = taskCount(items)
    return {
      ...state,
      items: (items),
      count : totalUniqueItems,
      isEmpty: totalUniqueItems === 0 ? true : false,
    }
  }
  