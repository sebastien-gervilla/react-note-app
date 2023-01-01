import React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import Notes from '../components/Notes';

const AppNotes = () => {

    const [searchValue, setSearchValue] = useState('');

    return (
        <section id='app-notes'>
            <div className="main-area">
                <div className="main-content">

                    <Header 
                        searchValue={searchValue} 
                        changeSearchValue={setSearchValue} 
                    />
                    <Notes searchedNote={searchValue} />

                </div>
            </div>
        </section>
    )
}

export default AppNotes;