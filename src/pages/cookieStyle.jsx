import React, {useState} from 'react';

function StyleChanger() {
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

    function handleStyleChange(event) {
        const styleId = event.target.value;
        window.setThemeAndReload(styleId); // Call the global function from index.html
    }

    function toggleSidebar() {
        setSidebarCollapsed(!isSidebarCollapsed);
    }

    return (
        <div>
            {/* Navbar */}
            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px',
                background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 100%)",
                color: 'var(--font-color)',
                borderBottom: '2px solid var(--secondary-color)',
                zIndex: 1000
            }}>
                <h1 style={{fontSize: 'var(--font-size-base)', margin: 'var(--margin)'}}>My Themed App</h1>

                <div style={{display: 'flex', alignItems: 'center', color: '#fff',}}>
                    <a href="#home" style={{
                        // color: 'var(--font-color)',
                        margin: '0 var(--margin)',
                        textDecoration: 'none',
                        fontSize: 'var(--font-size)'
                    }}>Home</a>
                    <a href="#about" style={{
                        // color: 'var(--font-color)',
                        margin: '0 var(--margin)',
                        textDecoration: 'none',
                        fontSize: 'var(--font-size)'
                    }}>About</a>
                    <a href="#contact" style={{
                        // color: 'var(--font-color)',
                        margin: '0 var(--margin)',
                        textDecoration: 'none',
                        fontSize: 'var(--font-size)'
                    }}>Contact</a>

                    <select onChange={handleStyleChange} style={{
                        marginLeft: 'var(--margin)',
                        padding: '5px 10px',
                        fontSize: 'var(--font-size)',
                        borderRadius: 'var(--border-radius)',
                        color: 'var(--font-color)',
                    }}>
                        <option value="1">Ocean Breeze Theme</option>
                        <option value="2">Elegant Night Theme</option>
                        <option value="3">Sunset Glow Theme</option>
                        <option value="4">Forest Whisper Theme</option>
                        <option value="5">Royal Gold Theme</option>
                        <option value="6">Lavender Dream Theme</option>
                        <option value="7">Warm Earth Theme</option>
                    </select>
                </div>
            </nav>

            {/* Sidebar */}
            <aside style={{
                width: isSidebarCollapsed ? '80px' : '250px',
                padding: '20px',
                backgroundColor: 'var(--secondary-color)',
                color: 'var(--font-color)',
                minHeight: '100vh',
                position: 'fixed',
                top: '60px', // Adjusted for fixed navbar
                left: 0,
                transition: 'width 0.3s ease',
                zIndex: 999
            }}>
                <button onClick={toggleSidebar} style={{
                    marginBottom: 'var(--margin)',
                    backgroundColor: 'var(--primary-color)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 'var(--border-radius)',
                    padding: '5px',
                    cursor: 'pointer'
                }}>
                    {isSidebarCollapsed ? 'Expand' : 'Collapse'}
                </button>
                {!isSidebarCollapsed && (
                    <>
                        <h2 style={{fontSize: 'var(--font-size-base)', marginBottom: 'var(--margin)'}}>Sidebar</h2>
                        <ul style={{listStyleType: 'none', padding: 0}}>
                            <li style={{marginBottom: 'var(--margin)'}}>
                                <a href="#dashboard"
                                   style={{color: 'var(--font-color)', textDecoration: 'none'}}>Dashboard</a>
                            </li>
                            <li style={{marginBottom: 'var(--margin)'}}>
                                <a href="#settings"
                                   style={{color: 'var(--font-color)', textDecoration: 'none'}}>Settings</a>
                            </li>
                            <li style={{marginBottom: 'var(--margin)'}}>
                                <a href="#profile"
                                   style={{color: 'var(--font-color)', textDecoration: 'none'}}>Profile</a>
                            </li>
                        </ul>
                    </>
                )}
            </aside>

            {/* Main Content */}
            <div style={{
                marginLeft: isSidebarCollapsed ? '120px' : '290px', // Adjusted for sidebar width
                paddingTop: '80px', // Offset for fixed navbar
                padding: '20px',
                backgroundColor: 'var(--background-color)',
                top: '10px',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>

                {/* Header Section */}
                <header style={{
                    marginTop: '20px',
                    padding: '20px',
                    backgroundColor: 'var(--primary-color)',
                    color: 'var(--font-color)',
                    borderRadius: 'var(--border-radius)',
                    marginBottom: 'var(--margin)'
                }}>
                    <h2 style={{fontSize: 'var(--font-size)'}}>Welcome to the Themed App</h2>
                    <p>Explore the app to see how themes apply to different components.</p>
                </header>

                {/* Feature Card Section */}
                <section style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: 'var(--margin)',
                    marginBottom: 'var(--margin)'
                }}>
                    {[1, 2, 3, 4, 5, 6].map((card) => (
                        <div key={card} style={{
                            backgroundColor: 'var(--primary-color)',
                            color: 'var(--font-color)',
                            padding: '20px',
                            borderRadius: 'var(--border-radius)',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
                        }}>
                            <h3 style={{fontSize: 'var(--font-size-base)'}}>Feature {card}</h3>
                            <p style={{fontSize: 'var(--font-size)'}}>This is feature card {card} with dynamic
                                styles.</p>
                        </div>
                    ))}
                </section>

                {/* Additional Section */}
                <section style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    gap: 'var(--margin)',
                    marginBottom: 'var(--margin)'
                }}>
                    <div style={{
                        backgroundColor: 'var(--secondary-color)',
                        color: 'var(--font-color)',
                        padding: '20px',
                        borderRadius: 'var(--border-radius)',
                        flex: 1,
                        textAlign: 'center'
                    }}>
                        <h3>Info Section</h3>
                        <p>Dynamic content for various information.</p>
                    </div>
                    <div style={{
                        backgroundColor: '#fff',
                        color: 'var(--primary-color)',
                        padding: '20px',
                        border: '2px solid var(--secondary-color)',
                        borderRadius: 'var(--border-radius)',
                        flex: 1,
                        textAlign: 'center'
                    }}>
                        <h3>Important Notice</h3>
                        <p>Details about updates or notices for the user.</p>
                    </div>
                </section>

                {/* Footer */}
                <footer style={{
                    padding: '20px',
                    backgroundColor: 'var(--secondary-color)',
                    color: 'var(--font-color)',
                    borderRadius: 'var(--border-radius)',
                    textAlign: 'center',
                    marginTop: 'auto'
                }}>
                    <p style={{fontSize: 'var(--font-size)'}}>© 2024 My Themed App. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}

export default StyleChanger;