import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { defaultNote } from '../utils/model-defaults';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { BiReset } from 'react-icons/bi';
import { getCurrentDate } from '../utils/utils';

const AddNote = ({ addNote }) => {

    const [note, setNote] = useState(defaultNote);

    const handleAddNote = event => addNote({
        ...note, 
        id: nanoid(), 
        date: getCurrentDate()
    });

    const handleReset = event => setNote(defaultNote);

    const handleChanges = event => setNote({
        ...note, 
        [event.target.name]: event.target.value
    });
    
    return (
        <div className="note add-note">

            <input className='title' name='title' type="text" placeholder='Title...' 
                value={note.title} onChange={handleChanges} />

            <textarea className='text' name='text' type="text" placeholder='Text...'
                value={note.text} onChange={handleChanges} />

            <div className="footer">
                <div className="buttons">
                    <button id='reset-btn' onClick={handleReset} ><BiReset /></button>
                    <button id='add-btn' onClick={handleAddNote}><IoIosAddCircleOutline /></button>
                </div>
            </div>
        </div>
    );
};

export default AddNote;