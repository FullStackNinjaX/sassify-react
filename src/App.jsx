import './App.css';
import {useEffect, useState} from "react";
import StyleChanger from "./pages/cookieStyle.jsx";
import Loader from "./utility/Loader.js";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [defaultCookieValue, setDefaultCookieValue] = useState('1');

    function applyCssVariables(css) {
        const root = document.documentElement;
        const cssVariables = css.split(';').filter(line => line.includes('--'));

        if (cssVariables.length === 0) {
            console.warn('Applying default CSS values as fallback');
            applyDefaultCssVariables();
            return;
        }

        cssVariables.forEach(variable => {
            const [key, value] = variable.split(':');
            if (key && value) {
                root.style.setProperty(key.trim(), value.trim());
            }
        });
    }

    function applyDefaultCssVariables() {
        const root = document.documentElement;
        root.style.setProperty('--next-box-shadow', '0px 4px 4px rgba(0, 0, 0, 0.25)');
        root.style.setProperty('--next-btn-gradient', 'linear-gradient(111.72deg, #4627C2 35.76%, #26ACE2 92.11%)');
        root.style.setProperty('--next-card-gradient', 'linear-gradient(101.98deg, #573EEA 62.66%, #009EFB 91.31%)');
        root.style.setProperty('--next-tool-header-gradient', 'linear-gradient(92.06deg, #573EEA 15.26%, #37A3FE 96.82%)');
        root.style.setProperty('--next-tool-header-gradient1', '#ffffff');
        root.style.setProperty('--next-btn-radius', '30px');
        root.style.setProperty('--next-color', '#5E5E5E');
        root.style.setProperty('--next-radius', '15px');
        root.style.setProperty('--next-primary-color', '#6835FF');
        root.style.setProperty('--next-accent1-color', '#37A3FE');
        root.style.setProperty('--next-accent2-color', '#E93574');
        root.style.setProperty('--next-base-color', '#ffffff');
        root.style.setProperty('--next-color2', '#3E3E3E');
        root.style.setProperty('--next-success', '#6FCF97');
        root.style.setProperty('--next-delay', '#E93574');
        root.style.setProperty('--next-progress', '#FFC000');
        root.style.setProperty('--next-btn-padding', '8px 20px');
        root.style.setProperty('--next-btn-font-size', '11px');
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
                applyDefaultCssVariables();
                setIsLoaded(true);
            });
    };

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    useEffect(() => {
        const themeId = getCookie('THEME_ID') || '1';
        setDefaultCookieValue(themeId);

        fetch(`http://localhost:8082/rest/styles/css/${themeId}`)
            .then(response => response.text())
            .then(css => {
                applyCssVariables(css);
                setIsLoaded(true);
            })
            .catch(error => {
                console.error('Error loading CSS variables:', error);
                applyDefaultCssVariables();
                setIsLoaded(true);
            });
    }, []);

    if (!isLoaded) {
        return (<div style={{width: '100%'}}><Loader/></div>);
    } else {
        return (
            <>
                <StyleChanger setThemeAndReload={setThemeAndReload} defaultCookieValue={defaultCookieValue}/>
            </>
        );
    }
}

export default App;
