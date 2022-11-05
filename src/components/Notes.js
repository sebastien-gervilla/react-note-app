import React, { useState } from 'react';
import Note from './Note';

const Notes = () => {

    const [notes, setNotes] = useState([]);

    const addNote = (newNote) => setNotes({...notes, newNote});

    const displayNotes = () => notes.map(note =>
        <Note title={note.title} />
    )

    return (
        <div className="notes">

        </div>
    );
};

export default Notes;