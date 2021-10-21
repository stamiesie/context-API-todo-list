import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

export default class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: { color: '#555', ui: '#ddd', bg: '#eee' },
        dark: { color: '#ddd', ui: '#333', bg: '#555' }
    }
    render() {
        return (
            <div>
                <ThemeContext.Provider value={{...this.state}}>

                </ThemeContext.Provider>
            </div>
        )
    }
}

