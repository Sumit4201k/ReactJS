import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {

    todos:[{id:1 , text:"hellow woeld "}]
}

export const todoSlice = createSlice({

    name : 'todo',
    initialState,
    reducers: {
        addTodo: (state,action) => {

            /* sate gives teh the 
            hand to hand situation 
            of initial sate or 
            curentlty stored value
            
            action :-tells reducer 
            what chnage should happen 
            */

            const todo = {

                id: nanoid(),
                text:action.payload,
            }
            state.todos.push(todo)

        },
        removeTodo: (state , action) => {

            state.todos= state.todos.filter((todo)=>todo.id !== action.payload)
            /* overwrite todos filter then every value compare id not equal
            to given id  */

        },
    }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer


