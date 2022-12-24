import React from 'react';

const Note = ({ title, text, date }) => {
    return (
        <div className="note">
            <p>{title}</p>
            <p>{text}</p>
            <p>{date}</p>
        </div>
    );
};

export default Note;