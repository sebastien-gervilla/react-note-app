import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Header = ({ searchedValue, changeSearchedValue }) => {

    const handleSearch = event => changeSearchedValue(event.target.value);

    return (
        <div className="header">
            <h2>Notes</h2>
            <div className="search-bar">
                <input 
                    type="text" 
                    value={searchedValue} 
                    onChange={handleSearch} 
                />
                <AiOutlineSearch />
            </div>
        </div>
    );
};

export default Header;