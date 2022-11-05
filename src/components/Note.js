import React from 'react';
import { BsCheck2Circle } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import { useState } from 'react';

const Note = ({ noteInfos, editNote, deleteNote }) => {

    const [note, setNote] = useState(noteInfos);

    const handleDelete = event => deleteNote(note.id);

    const handleChanges = event => setNote({
        ...note, 
        [event.target.name]: event.target.value
    });
    
    const handleEdit = event => editNote(note);

    const isModified = () => Object.entries(noteInfos).find(
        ([key, value]) => note[key] !== value) ? true : false;

    const displayEditButton = () => isModified() && 
        <button id='edit-btn' onClick={handleEdit} ><BsCheck2Circle /></button>;

    return (
        <div className="note">
            <input className='title' name='title' type="text" placeholder='Title...' 
                value={note.title} onChange={handleChanges} />

            <textarea className='text' name='text' type="text" placeholder='Text...'
                value={note.text} onChange={handleChanges} />

            <div className="footer">
                <p>{note.date}</p>
                <div className="buttons">
                    {displayEditButton()}
                    <button id='delete-btn' onClick={handleDelete}><AiFillDelete /></button>
                </div>
            </div>
        </div>
    );
};

export default Note;