import React from 'react';
import Note from './Note';
import notesJson from '../assets/docs/notes.json';
import AddNote from './AddNote';
import useLocalStorage from '../hooks/useLocalStorage';

const Notes = ({ searchedNote }) => {

    const [notes, setNotes] = useLocalStorage('notes', notesJson.notes);

    const addNote = (newNote) => setNotes([...notes, newNote]);

    const editNote = (newNote) => setNotes(notes.map(note => note.id === newNote.id ? newNote : note));

    const deleteNote = (id) => setNotes(notes.filter(note => note.id !== id));

    const displayNotes = () => {
        const lowerSearchedNote = searchedNote.toLowerCase();
        return notes
            .filter(note => 
                note.title.toLowerCase().includes(lowerSearchedNote) || 
                note.text.toLowerCase().includes(lowerSearchedNote))
            .map(note => <Note 
                key={note.id} 
                noteInfos={note}
                editNote={editNote}
                deleteNote={deleteNote}
            />);
    }

    return (
        <div className="notes">
            <AddNote addNote={addNote} />
            {displayNotes()}
        </div>
    );
};

export default Notes;