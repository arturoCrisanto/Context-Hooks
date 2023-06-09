import React, {Component}from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

//todo --second approach ine lwat para ha context provider nagana ine ha both class and functions
class Navbar extends Component {
    render() { 
        return (
            <AuthContext.Consumer >{(authContext)=> ( 
            <ThemeContext.Consumer>{(themeContext) =>{
                const { isAuthenticated, toggleAuth} =authContext;
                const { isLightTheme,light, dark} = themeContext;
                const theme= isLightTheme ? light : dark;

                return(
                <nav style={{background:theme.ui, color: theme.syntax}}>
                    <h1>Context App</h1>
                    <div onClick={toggleAuth}>
                        {isAuthenticated ? "log in" : "log out"}
                    </div>
                        <ul> 
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                </nav> 
                )
            }}
            </ThemeContext.Consumer>
            )}
            
            </AuthContext.Consumer>
        );
    }
}

export default Navbar;