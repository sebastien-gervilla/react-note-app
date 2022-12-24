import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const Note = ({ id, title, text, date, deleteNote }) => {

    const handleDeleteNote = () => deleteNote(id);

    return (
        <div className="note">
            <p>{title}</p>
            <p>{text}</p>
            <p>{date}</p>

            <div className="footer">
                <div className="buttons">
                    <button id='delete-btn' onClick={handleDeleteNote}><AiFillDelete /></button>
                </div>
            </div>
        </div>
    );
};

export default Note;