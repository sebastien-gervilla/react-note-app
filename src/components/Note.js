import React from 'react';

const Note = ({ title, text }) => {
    return (
        <div className="note">
            <p className='title'>{title}</p>
            <p>{text}</p>
        </div>
    );
};

export default Note;