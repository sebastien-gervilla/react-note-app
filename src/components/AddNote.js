import React from 'react';
import { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io'

const AddNote = ({ addNote }) => {

    const [note, setNote] = useState(defaultNote);

    const handleAddNote = () => addNote(note);

    const handleChangeNote = event => {
        const field = event.target.name;
        const value = event.target.value;
        setNote({
            ...note,
            [field]: value
        })
    }

    return (
        <div className="note add-note">
            <input name='title' type="text" className='title' value={note.title} onChange={handleChangeNote} />

            <textarea name="text" className='text' value={note.text} onChange={handleChangeNote} >

            </textarea>

            <div className="footer">
                <div className="buttons">
                    <button id='reset-btn'></button>
                    <button id='add-btn' onClick={handleAddNote}><IoIosAddCircleOutline /></button>
                </div>
            </div>
        </div>
    );
};

const defaultNote = {
    title: '',
    text: '',
    date: ''
}

export default AddNote;