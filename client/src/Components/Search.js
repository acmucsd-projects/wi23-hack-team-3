import React, { useState } from 'react';

export const Search = () => {
    const itemList = [
        "Peter",
        "Charisse",
        "Aditi",
        "Zed",
        "Andrew"
      ];

    const [filteredList, setFilteredList] = new useState(itemList);

    const [isVisible, setIsVisible] = useState(false);

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      setFilteredList([...filteredList, inputValue]);
      setInputValue('');
    };

    const filterBySearch = (event) => {
        const query = event.target.value;

        var updatedList = [...itemList];

        updatedList = updatedList.filter((item) => {
          return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });

        setFilteredList(updatedList);
      };

    return (
        <>
        <div className = "searchbar">
        <input id = "searchBar" onChange = {filterBySearch} onClick={()=>setIsVisible(true)}/>
        {isVisible && (<ol className = "fList">
            {filteredList.map((item,index) => (<li key={index}><a className = "linker" href="calendar">{item}</a></li>))}
        </ol>)}
        </div>
        <div className = "addf">
        <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Add Friend</button>
        </form>
        </div>
        </>
     );
}