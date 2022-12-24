import React from 'react';
import { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { BsCheck2Circle } from 'react-icons/bs';

const Note = ({ noteInfos, editNote, deleteNote }) => {

    const [note, setNote] = useState(noteInfos);

    const handleEditNote = () => editNote(note);

    const handleChangeNote = event => {
        const field = event.target.name;
        const value = event.target.value;
        setNote({
            ...note,
            [field]: value
        });
    }

    const handleDeleteNote = () => deleteNote(noteInfos.id);

    const isModified = () => Boolean(Object.entries(noteInfos).find(([key, value]) => note[key] !== value));

    const displayEditButton = () => isModified() &&
        <button id='edit-btn' onClick={handleEditNote}><BsCheck2Circle /></button>

    return (
        <div className="note">
            <input name='title' type="text" className='title' value={note.title} onChange={handleChangeNote} />

            <textarea name="text" className='text' value={note.text} onChange={handleChangeNote} >

            </textarea>

            <div className="footer">
                <p>{noteInfos.date}</p>
                <div className="buttons">
                    {displayEditButton()}
                    <button id='delete-btn' onClick={handleDeleteNote}><AiFillDelete /></button>
                </div>
            </div>
        </div>
    );
};

export default Note;