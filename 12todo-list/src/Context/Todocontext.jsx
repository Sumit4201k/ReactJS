import { createContext , useContext } from "react";

export const TodoContext = createContext({

    todos:[
            {
                id: 1,
                todo : "todo msg",
                completed: false,
            }
    ],

    addTodo: (todo)=>{},
    updateTodo: (id,todo)=>{},
    deleteTodo: (id)=>{},
    ToggleComplete: (id)=>{}

     


})


export const  TodoContextprovider = TodoContext.Provider

export default function useTodocontext(){

         return useContext(TodoContext)

}