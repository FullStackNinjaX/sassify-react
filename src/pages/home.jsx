import React, {useEffect, useState} from 'react';
import Select from "react-select";
import axios from "axios";


function Homepage() {
    const [sassVariables, setSassVariables] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [styleValue] = useState([
        {label: 'Style 1', value: 1},
        {label: 'Style 2', value: 2},
        {label: 'Style 3', value: 3},
        {label: 'Style 4', value: 4},
        {label: 'Style 5', value: 5},
        {label: 'Style 6', value: 6},
        {label: 'Style 7', value: 7}]);
    console.log('Sass variables:', sassVariables)


    /*async function fetchSassVariables(id) {
        try {
            const response = await fetch(`http://localhost:8082/rest/styles/${id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setSassVariables(data);
            Object.entries(data).forEach(([key, value]) => {
                document.documentElement.style.setProperty(`--${key}`, value);
            });
            console.log('Fetched Sass variables:', data);
        } catch (error) {
            console.error("Error fetching Sass variables:", error);
        }
    }*/

    /*window.CSS.registerProperty({
        name: "--primaryColor",
        syntax: "<color>",
        inherits: false,
        initialValue: "aqua",
    });*/


    const applySassVariables = (variables) => {
        Object.entries(variables).forEach(([key, value]) => {
            document.documentElement.style.setProperty(`--${key}`, value);
        });
    };


    async function onStyleChange(style) {
        try {
            const styleId = style.value;
            await axios.post('http://localhost:8082/cookies/create', styleId, {withCredentials: true});

            // await axios.post('http://localhost:8082/cookies/?styleId=', {styleId});
            const response = await axios.get('http://localhost:8082/cookies/fetch-cookies');
            setSassVariables(response.data);
            applySassVariables(response.data);
        } catch (error) {
            console.error('Error setting or fetching variables:', error);
        }
    }


    useEffect(() => {
        async function fetchData() {
            /* const properties = [
                 { name: "--primaryColor", syntax: "<color>", inherits: false, initialValue: "#007bff" },
                 { name: "--secondaryColor", syntax: "<color>", inherits: false, initialValue: "#6c757d" },
                 { name: "--sidebarColor", syntax: "<color>", inherits: false, initialValue: "#f8f9fa" },
                 { name: "--navbarColor", syntax: "<color>", inherits: false, initialValue: "#98ff00" },
                 { name: "--backgroundColor", syntax: "<color>", inherits: false, initialValue: "#e7bf3c" },
                 // Add other properties if needed
             ];

             properties.forEach(prop => {
                 try {
                     window.CSS.registerProperty(prop);
                 } catch (error) {
                     console.warn(`Property ${prop.name} is already registered.`);
                 }
             });*/
            setIsLoading(false);
        }
        fetchData();
    }, []);


    if (isLoading) {
        return <div>Loading...</div>
    } else {
        return (
            <>
                <header className="navbar">
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
                        <Select
                            options={styleValue}
                            // className={"next_select"}
                            onChange={onStyleChange}
                            classNamePrefix="next_select"
                            placeholder={'Select a style'}
                        />
                        {/*<select onChange={e => setThemeId(e.target.value)}>
                            <option value="1">Theme 1</option>
                            <option value="2">Theme 2</option>
                            <option value="3">Theme 3</option>
                            <option value="4">Theme 4</option>
                            <option value="5">Theme 5</option>
                            <option value="6">Theme 6</option>
                            <option value="7">Theme 7</option>
                        </select>*/}
                    </main>
                </div>

                <footer className="footer">
                    <p>© 2024 My Themed App. All rights reserved.</p>
                </footer>
            </>
            /*<div style={{backgroundColor: sassVariables.backgroundColor,color: sassVariables.secondaryColor}}>
                <div>
                    This text is styled dynamically using Sass variables from the backend!
                    <Select
                        options={styleValue}
                        // className={"next_select"}
                        onChange={onStyleChange}
                        classNamePrefix="next_select"
                        placeholder={'Select a style'}
                    />
                </div>
            </div>*/
        );
    }
}

export default Homepage;