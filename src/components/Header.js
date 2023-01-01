import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Header = ({ searchValue, changeSearchValue }) => {

    const handleChangeSearch = event => changeSearchValue(event.target.value);

    return (
        <div className="header">
            <h2>Application de notes</h2>
            <div className="search-bar">
                <input 
                    type="text" 
                    value={searchValue}
                    onChange={handleChangeSearch}
                    placeholder={"Search..."}
                />
                <AiOutlineSearch />
            </div>
        </div>
    );
};

export default Header;