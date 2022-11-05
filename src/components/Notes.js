import React from 'react';
import Note from './Note';
import AddNote from './AddNote';
import useLocalStorage from '../hooks/useLocalStorage';

const Notes = ({ searchedNote }) => {

    const [notes, setNotes] = useLocalStorage('notes', []);

    const addNote = newNote => setNotes([...notes, newNote]);

    const editNote = newNote => setNotes(notes.map(
        note => note.id === newNote.id ? newNote : note
    ));

    const deleteNote = noteId => setNotes(notes.filter(note => note.id !== noteId));

    const displayNotes = () => notes
        .filter(note => note.title.includes(searchedNote) || note.text.includes(searchedNote))
        .map(note =>
            <Note 
                key={note.id} 
                noteInfos={note}
                editNote={editNote}
                deleteNote={deleteNote}
            />
        );

    return (
        <div className="notes">
            <AddNote addNote={addNote} />
            {displayNotes()}
        </div>
    );
};

export default Notes;