export type status = "done" | "todo" | "doing"
export type priority = "low" | "medium" | "high"


export interface ITask {
    id?: number
    task: string
    status: status | "status"
    priority: priority | "priority"
    deadline: Date
    actions?: any | null
}

export interface UpdateItemInput extends Partial<Omit<ITask, "id">> {}


  
export function addTask(
    items: ITask[],
    item: ITask,
  ) {
    if (!item) {
        throw new Error("don't item add")
    }
    const id:number = items.length + 1 
    return [...items, { ...item, id }]
}

export function getTask(items: ITask[], id: ITask["id"]) {
    return items.find((item) => item.id === id)
}

export function removeTask(items: ITask[], id: ITask["id"]) {
    return items.filter((item) => item.id !== id)
}

export function editTask (
    items:ITask[],
    item:UpdateItemInput,
    id:ITask['id']
  ) {
    return items.map((itemTask:ITask) => (
        itemTask.id === id ? { ...itemTask , ...item } : itemTask
    ))
}

export function taskCount (items:ITask[]) {
    return items.length
}
  
export const setTodo = (state: any,todo:any) =>{
    const {
        items,
    } = todo
    const totalUniqueItems = taskCount(items);

    return {
      ...state,
      items: (items),
      count : totalUniqueItems,
      isEmpty: totalUniqueItems === 0,
    };
  }