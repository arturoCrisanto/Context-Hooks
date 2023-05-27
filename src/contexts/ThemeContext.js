import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();
// pag create han state han context
class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
    };

    render() {
        return (
            // pag call han context provider ha app.js
            // an pag tawag han aadto sakon na children
        <ThemeContext.Provider value={{ ...this.state }}> 
            {this.props.children} 
        </ThemeContext.Provider>
        );
    }
    }

export default ThemeContextProvider;
