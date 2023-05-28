import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: { syntax: '#DDE6ED', ui: '#9DB2BF', bg: '#526D82' },
        dark: { syntax: '#F6F1F1', ui: '#AFD3E2', bg: '#19A7CE' }
    };

    toggleTheme = () => {
        this.setState((prevState) => ({
            isLightTheme: !prevState.isLightTheme
        }));
    };

    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;
