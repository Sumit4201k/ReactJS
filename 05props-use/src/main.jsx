import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card2 from './component/Card2.jsx'

// let myobj = {

//   username: "sumit",
//   infom:"used card as an componenent and coustimized using props",
//   img:"      https://images.pexels.com/photos/29242558/pexels-photo-29242558.jpeg?_gl=1*oqrmt*_ga*MTA4ODA0OTQyLjE3NDcyMzA1ODA.*_ga_8JE65Q40S6*czE3NjU2MzQxNDMkbzckZzEkdDE3NjU2MzQxNTMkajUwJGwwJGgw"

// }

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <Card2 username="sumit" 
    infom="used card as an componenent and coustimized using props"
    btntxt="https://github.com/Sumit4201k"
     img="      https://images.pexels.com/photos/29242558/pexels-photo-29242558.jpeg?_gl=1*oqrmt*_ga*MTA4ODA0OTQyLjE3NDcyMzA1ODA.*_ga_8JE65Q40S6*czE3NjU2MzQxNDMkbzckZzEkdDE3NjU2MzQxNTMkajUwJGwwJGgw"
/> 
    <Card2 username="MY GITHUB "
    infom="used link and props object proprty to define diect names in card"
    btntxt="https://github.com/Sumit4201k"
    img="https://avatars.githubusercontent.com/u/112767469?s=400&v=4"/>
  </StrictMode>,
)
