import { useState , useCallback , useEffect ,useRef} from 'react'
import './App.css'

function App() {
  const [length, setlength]= useState(6)
  const [charallowed,setCharallowed] = useState(false)
  const [numallowed,setNumallowed]= useState(false)
  const [password,setPassword] = useState("")

  //refrence hook
  const passref=useRef(null)

  const passwordgenerator = useCallback(()=>{
    let pass=""
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuuuvwxyz"
    if (numallowed) str += "0123456789"
    if (charallowed) str+= "!@#$%^&*()_+"

    for (let i = 1; i <= length; i++) {
      const element = Math.floor(Math.random() * str.length + 1);
      
      pass += str.charAt(element)
    }

    setPassword(pass)



  } , [length,charallowed,numallowed,setPassword])
  // use callback make the memomry cachec in browser to optimize the code

  const clickcopy = useCallback(()=>{
    passref.current?.select()
    // use reff to select
    passref.current?.setSelectionRange(0, 5)

    window.navigator.clipboard.writeText(password)
  },[password,length])

  useEffect(()=>{
    passwordgenerator()

  },[length,numallowed,charallowed,setPassword])
  //any of this get any udate or anything effect will run






  return (
    
    <>
      <div className=' w-full max-w-md mx-auto shadow-md rounded-full px-4 my-8 bg-gray-500 text-amber-50'>
          <h1 className='text-gray-300 text-center my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 py-5'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          ref={passref}
          readOnly
          />
          <button 
          onClick={clickcopy}
          className='outline-none bg-blue-300 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100} 
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}/>
            <label >length :{length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numallowed}
            id='numallowed'
            onChange={()=>{setNumallowed( ( prevv) => !prevv)}} />
            <label htmlFor="numallowed">NUmbers</label>
          </div>

          <div className='flex item-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={charallowed}
            id='charallowed'
            onChange={()=>{ setCharallowed( ( prevv) => !prevv)}} />
             <label htmlFor="charallowed">characters</label>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default App
