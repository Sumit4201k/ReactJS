import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("pink")


  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-2.5 bg-pink-300 px-3 py-2 rounded-3xl'>
            <button className='outline-transparent px-4 py-0 rounded-full text-amber-50 shadow-2xl'
            style={{background:"red"}}
            onClick={()=>setcolor("red")}
            >
              red
            </button>
            <button className='outline-transparent px-4 py-0 rounded-full text-amber-50 shadow-2xl'
            style={{background:"cyan"}}
            onClick={()=>setcolor("cyan")}
            >
              cyan
            </button>
            <button className='outline-transparent px-4 py-0 rounded-full text-amber-50 shadow-2xl'
            style={{background:"blue"}}
            onClick={()=>setcolor("blue")}
            
            >
              blue
            </button>
            <button className='outline-transparent px-4 py-0 rounded-full text-amber-50 shadow-2xl'
            style={{background:"olive"}}
             onClick={()=>setcolor("olive")}
            >
              olive
            </button>
            <button className='outline-transparent px-4 py-0 rounded-full text-amber-50 shadow-2xl'
            style={{background:"green"}}
             onClick={()=>setcolor("green")}

            >
              green
            </button>
            <button className='outline-transparent px-4 py-0 rounded-full text-amber-50 shadow-2xl'
            style={{background:"purple"}}
             onClick={()=>setcolor("purple")}
            >
              purple
            </button>

          </div>
       

        </div>
    </div>
  )
}

export default App
