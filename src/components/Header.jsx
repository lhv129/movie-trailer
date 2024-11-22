import PropType from 'prop-types';
import { useState } from 'react';

function Header({onSearch}) {

    const [textSearch,setSearch] = useState('');

    return (
        <header className="p-4 bg-black sm:flex items-center justify-between">
            <div className="sm:flex item-center space-x-4">
                <h1 className="text-center text-[30px] uppercase font-bold text-red-700">Netflix</h1>
                <nav className="sm:flex max-sm:my-3 text-center items-center space-x-4">
                    <a href="#" className="text-white">Home</a>
                    <a href="#" className="text-white">About</a>
                    <a href="#" className="text-white">Contact</a>
                </nav>
            </div>
            <div className="space-x-4 text-center">
                <input type="text" placeholder="Search" className="p-2 text-black" onChange={(e) => setSearch(e.target.value)} value={textSearch}></input>
                <button className="py-1 px-3 rounded-lg text-white bg-red-600" onClick={() => onSearch(textSearch)}>Search</button>
            </div>
        </header>
    )
}

Header.propTypes = {
    onSearch: PropType.func,
}

export default Header;