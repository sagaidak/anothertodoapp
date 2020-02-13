import React, {useState} from 'react';

import './search-panel.css';

const SearchPanel = ({filterList}) => {
  const [searchText, setSearchText] = useState('');

  let handleOnChange = (e) => {
      setSearchText(e.target.value);
      filterList(e.target.value);
  }

  return (
    <input type="text"
           className="form-control search-input"
           placeholder="type to search"
           value={searchText}
           onChange={(e) => handleOnChange(e)}
    />
  );
};

export default SearchPanel;
