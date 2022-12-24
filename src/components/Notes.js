import React, { useState } from 'react';
import Note from './Note';
import notesJson from '../assets/docs/notes.json';
import AddNote from './AddNote';

const Notes = () => {

    const [notes, setNotes] = useState(notesJson.notes);

    const addNote = (newNote) => setNotes([...notes, newNote]);

    const deleteNote = (id) => setNotes(notes.filter(note => note.id !== id));

    const displayNotes = () => {
        return notes.map(note => <Note 
            key={note.id} 
            id={note.id}
            title={note.title} 
            text={note.text}
            date={note.date}
            deleteNote={deleteNote}
        />)
    }

    return (
        <div className="notes">
            <AddNote addNote={addNote} />
            {displayNotes()}
        </div>
    );
};

export default Notes;