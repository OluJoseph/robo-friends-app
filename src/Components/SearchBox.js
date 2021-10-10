import React from 'react';

function SearchBox ({searchChange}) {
    return (
        <div>
            <input type="search"
             placeholder="search robots" 
             className="pa2 ma3 b--white bg-lightest-blue"
             onChange = {searchChange}
             />
        </div>
    )
}

export default SearchBox;