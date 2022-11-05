import React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import Notes from '../components/Notes';

const AppNotes = () => {

    const [searchedNote, setSearchedNote] = useState('');
    
    const changeSearchedValue = value => setSearchedNote(value);

    return (
        <section id="app-notes">
            <div className="main-area">
                <div className="main-content">

                    <Header searchedValue={searchedNote} changeSearchedValue={changeSearchedValue} />
                    <Notes searchedNote={searchedNote} />

                </div>
            </div>
        </section>
    );
};

export default AppNotes;