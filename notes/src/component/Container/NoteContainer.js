import React from "react";
import Notes from "../Notes/Notes";
import "./noteContainer.css";
import { Heading } from "@chakra-ui/react";
const NoteContainer = (props) => {
  const reverArray = (arr) => {
    const array = [];

    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }

    return array;
  };

  const notes = reverArray(props.notes);
  return (
    <div className="note-container">
      <h2>Notes</h2>
      <div className="note-container_notes">
        {notes?.length > 0 ? (
          
          notes.map((item) => (
            <Notes key={item.id} deleteNote={props.deleteNote} updateText={props.updateText} notes={item} />
          ))
        ) : (
          <Heading>No Notes</Heading>
        )}
      </div>
    </div>
  );
};

export default NoteContainer;
