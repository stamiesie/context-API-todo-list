import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

// CLASS COMPONENT
// export default class BookList extends Component {
//     static contextType = ThemeContext;
//     render() {
//         const { isLightTheme, light, dark } = this.context;
//         const theme = isLightTheme ? light : dark;
//         return (
//             <div className='book-list' style={{ background: theme.bg, color: theme.color }}>
//                 <ul>
//                     <li style={{ background: theme.ui} }>Desert Solitaire</li>
//                     <li style={{ background: theme.ui} }>One Hundred Years of Solitude</li>
//                     <li style={{ background: theme.ui} }>East of Eden</li>
//                 </ul>
//             </div>
//         )
//     }
// }


// FUNCTION COMPONENT
export default function BookList() {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <div className='book-list' style={{ background: theme.bg, color: theme.color }}>
            <ul>
                <li style={{ background: theme.ui} }>Desert Solitaire</li>
                <li style={{ background: theme.ui} }>One Hundred Years of Solitude</li>
                <li style={{ background: theme.ui} }>East of Eden</li>
            </ul>
        </div>
    )
}

