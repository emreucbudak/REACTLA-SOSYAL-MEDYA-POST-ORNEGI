import AddMention from './AddMention'
import './App.css'
import Header from './Header'
import React, { useState } from 'react'
import ListPost from './ListPost'

function App() {
  const [postINF,setPostINF] = useState([])
  const sendPost = (title,img) => {
    const created = [
      ...postINF ,{
        id : Math.round(Math.random()*99999),
        title,
        img

      }
    ]
    setPostINF(created);
  }
  return (
    <>
      <Header />
      <div className='formdiv'>
        <AddMention postSend={sendPost} />
      </div>
      <ListPost postList = {postINF}/>
    </>
  )
}

export default App
