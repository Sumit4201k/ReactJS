
import './App.css'
import UserContextProvider from './Context/UserContextprovider'
import Login from './components/Login'
import Profile from './components/Profile'


function App()
 {
 

  return (
    <UserContextProvider>
    <h1>react wth conetxt api</h1>
    <Login />
    <Profile/>
    </UserContextProvider>
  )
}

export default App
