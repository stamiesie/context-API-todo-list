import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

// CLASS COMPONENT

// export default class ThemeToggle extends Component {
//     static contextType = ThemeContext;
//     render() {
//         const { toggleTheme } = this.context;
//         return (
//             <div>
//                 <button onClick={toggleTheme}>Toggle Theme</button>
//             </div>
//         )
//     }
// }


// FUNCTION COMPONENT

export default function ThemeToggle() {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}
