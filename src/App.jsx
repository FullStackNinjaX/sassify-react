import './App.css';
import {useEffect} from "react";
import Homepage from "./pages/home.jsx";

function App() {
    /*const [Id, setThemeId] = useState(0);
    console.log('Theme ID:', themeId);*/

    useEffect(() => {
        /*fetch(`http://localhost:8082/rest/styles/${Id}`)
            .then(response => response.json())
            .then(data => {
                Object.entries(data).forEach(([key, value]) => {
                    document.documentElement.style.setProperty(`--${key}`, value);
                });
            });*/
    },);

    return (
        <>
            <Homepage/>
            {/*<header className="navbar">
                <h1 className="navbar-brand">My Themed App</h1>
                <nav>
                    <ul className="navbar-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>

                    </ul>
                </nav>
            </header>

            <div className="app-container">
                <aside className="sidebar">
                    <ul className="sidebar-links">
                        <li><a href="#section1">Section 1</a></li>
                        <li><a href="#section2">Section 2</a></li>
                        <li><a href="#section3">Section 3</a></li>
                    </ul>
                </aside>

                <main className="main-content" style={{backgroundColor: 'var(--backgroundColor)'}}>
                    <h1 style={{color: 'var(--secondaryColor)'}}>Themed Heading</h1>
                    <p style={{fontSize: 'var(--font-size-base)'}}>This is a themed paragraph.</p>

                    <label>Select Theme:</label>
                    <select onChange={e => setThemeId(e.target.value)}>
                        <option value="1">Theme 1</option>
                        <option value="2">Theme 2</option>
                        <option value="3">Theme 3</option>
                        <option value="4">Theme 4</option>
                        <option value="5">Theme 5</option>
                        <option value="6">Theme 6</option>
                        <option value="7">Theme 7</option>
                    </select>
                </main>
            </div>

            <footer className="footer">
                <p>© 2024 My Themed App. All rights reserved.</p>
            </footer>*/}
        </>
    );
}

export default App;
