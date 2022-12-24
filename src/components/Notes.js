import React from 'react';
import Note from './Note';
import notesJson from '../assets/docs/notes.json';

const Notes = () => {

    const displayNotes = () => {
        const notes = notesJson.notes;
        return notes.map(note => <Note 
            key={note.id} 
            title={note.title} 
            text={note.text}
            date={note.date}
        />)
    }

    return (
        <div className="notes">
            {displayNotes()}
        </div>
    );
};

export default Notes;