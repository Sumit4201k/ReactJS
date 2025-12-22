
import { useEffect, useState } from 'react'
import './App.css'
import { TodoContextprovider } from './Context'
import TodoForm from './Components/Form'
import TodoItem from './Components/List'

function App() {

    const [todos , setTodos] = useState([])

    /*this todo is from inner form todo
    id added  todo messege and complete toggle
    is as it is from form */
    const addTodo = (todo)=>{

        setTodos((prev)=>[{id:Date.now(),...todo},...prev])

    }

    const updateTodo = (id , todo) =>{

        setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id=== id ? todo : prevTodo)))
                                                /* here prevTodo.id is whole array id
                                                and id is update todo id*/
    }

    const deleteTodo= (id)=>{

        setTodos((prev)=>prev.filter((todo)=>todo.id !== id))
                                    /* return value that is not 
                                    equal to deleting todo id */

    }

    const ToggleComplete = (id)=>{

        setTodos((prev) => prev.map((prevtodo)=>(prevtodo.id === id? {...prevtodo, completed:!prevtodo.completed} :prevtodo )))
                                                                    /* spread the single obj from
                                                                    previos array overrite the complete
                                                                    */
    }

    /*local storage (browser)
    local storage= string , no json neeeed to convt */

       useEffect(()=>{

        const todo = JSON.parse(localStorage.getItem("Todos"))

        if (todo && todo.length > 0) {

            setTodos(todo)
            
        }

       },[])

       useEffect(()=>{

        localStorage.setItem("Todos",JSON.stringify(todos))

       },[todos])



  return (
    <TodoContextprovider value={{updateTodo,addTodo,deleteTodo,ToggleComplete,todos}} >
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                            <div key={todo.id}
                            className='w-full'
                            >
                                    <TodoItem todo={todo}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            </TodoContextprovider>
  )
}

export default App
