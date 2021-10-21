import React, { createContext, useState }from 'react';

export const BookContext = createContext();

export default function BookContextProvider(props) {
    const [books, setBooks] = useState([
        {title: 'Desert Solitude', id: 1},
        {title: 'One Hundred Years of Solitude', id: 2},
        {title: 'Dune', id: 3},
        {title: 'East of Eden', id: 4},
    ])
    return (
        <div>
            <BookContext.Provider value={{books}}>
                {props.children}
            </BookContext.Provider>
        </div>
    )
}
