import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

//todo button component para pag call han dark or light mode

class ThemeToggle extends Component {
    static contextType = ThemeContext
    render() { 
        const { toggleTheme} = this.context
        return (
            <button onClick={toggleTheme}>
                Toggle the Themes
            </button>
        );
    }
}
export default ThemeToggle;