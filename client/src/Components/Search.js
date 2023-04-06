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
        </>
     );
}