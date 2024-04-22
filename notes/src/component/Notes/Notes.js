import React from 'react'
import "./notes.css"
import { DeleteIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'

let timer = 500,timeout
const Notes = (props) => {
   const formatDate = (value)=>{
    
    const date = new Date(value)
    const monthNames = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    let hrs = date.getHours()
    let amPm =hrs>12?"PM":"AM"
    hrs = hrs?hrs:"12"
    hrs = hrs>12?hrs=24-hrs:hrs

    let min = date.getMinutes()
    min = min<10?"0"+min:min
    let day = date.getDate()
    let month = monthNames[date.getMonth()]

    return `${hrs}:${min} ${amPm} ${day} ${month}`
   }

   const debounce = (func)=>{
    clearTimeout(timeout)
    timeout = setTimeout(func,timer)
   }
 
   const updateText = (text , id)=>{
     debounce(()=>props.updateText(text, id))
   }
  return (
    <div className="note" style={{backgroundColor:props.notes.color}}>
        <textarea className="note_text" defaultValue={props.notes.text}
        onChange={(event)=>updateText(event.target.value , props.notes.id)}
        >


        </textarea>
        <div className='note_footer'>
         <Button onClick={()=> props.deleteNote(props.notes.id)}><DeleteIcon/></Button> 
          <p >{formatDate(props.notes.time) }</p>
        </div> 
        
    </div>
  )
}

export default Notes