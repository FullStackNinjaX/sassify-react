import './App.css';
import {useEffect, useState} from "react";
import StyleChanger from "./pages/cookieStyle.jsx";
import Loader from "./utility/Loader.js";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [defaultCookieValue, setDefaultCookie] = useState({});

    function applyCssVariables(css) {
        const root = document.documentElement;
        const cssVariables = css.split(';').filter(line => line.includes('--'));

        cssVariables.forEach(variable => {
            const [key, value] = variable.split(':');
            if (key && value) {
                root.style.setProperty(key.trim(), value.trim());
            }
        });
    }

    const setThemeAndReload = (styleId) => {
        setIsLoaded(false);
        fetch(`http://localhost:8082/cookies/create?styleId=${styleId}`, {
            method: 'POST',
            credentials: 'include',
        })
            .then(() => fetch(`http://localhost:8082/rest/styles/css/${styleId}`))
            .then(response => response.text())
            .then(css => {
                applyCssVariables(css);
                setIsLoaded(true);
            })
            .catch(error => {
                console.error('Error updating CSS variables:', error);
                setIsLoaded(true);
            });
    };

    useEffect(() => {
        function getCookie(name) {
            const value = `; ${document.cookie}`;
            console.log("value", value)
            const parts = value.split(`; ${name}=`);
            console.log("parts", parts)
            if (parts.length === 2) return parts.pop().split(';').shift();
        }

        const themeId = getCookie('THEME_ID') || '1';
        setDefaultCookie(themeId)
        fetch(`http://localhost:8082/rest/styles/css/${themeId}`)
            .then(response => response.text())
            .then(css => {
                applyCssVariables(css);
                setIsLoaded(true);
            })
            .catch(error => {
                console.error('Error loading CSS variables:', error);
                setIsLoaded(true);
            });
    }, []);

    if (!isLoaded) {
        return (<div style={{width: '100%'}}><Loader/></div>);
    } else {
        return (
            <>
                <StyleChanger setThemeAndReload={setThemeAndReload}
                              defaultCookieValue={defaultCookieValue}
                />
            </>
        );
    }
}

export default App;
