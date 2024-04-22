import logo from './logo.svg';
import './App.css';
import NoteContainer from './component/Container/NoteContainer';
import Sidebar from './component/sidebar/Sidebar';
import { useEffect, useState } from 'react';


function App() {
  const [notes , setNotes] = useState(JSON.parse(localStorage.getItem("notes-app"))||[])
  const addNote=(color)=>{
    
    const tempNotes = [...notes]
      
    tempNotes.push({
      id:Date.now()+""+Math.random()*78,
      text:"",
      time:Date.now(),
      color,
    })
    setNotes(tempNotes)
  }

  const deleteNote = (id)=>{
    console.log(id)
    const tempNotes = [...notes]
    const index = tempNotes.findIndex(item=>item.id === id)

    if(index<0) return

    tempNotes.splice(index, 1)
    setNotes(tempNotes)
  }

  useEffect(()=>{
    localStorage.setItem("notes-app" , JSON.stringify(notes))
  },[notes])

 const updateText = (text , id)=>{
  const tempNotes = [...notes]
  const index = tempNotes.findIndex(item=>item.id === id)

  if(index<0) return
  tempNotes[index].text =text;
  setNotes(tempNotes)
 }
  
  return (
    <div className="App">
    <Sidebar addNote={addNote}/>
     <NoteContainer deleteNote={deleteNote} updateText={updateText} notes={notes}/>
     
    </div>
  );
}

export default App;
