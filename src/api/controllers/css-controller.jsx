const cssController = {
    applyTheme: function (themeId) {
        fetch(`http://localhost:8082/rest/styles/${themeId}`)
            .then(response => response.json())
            .then(data => {
                Object.entries(data).forEach(([key, value]) => {
                    document.documentElement.style.setProperty(`--${key}`, value);
                });
            })
            .catch(error => {
                console.error("Error fetching theme data:", error);
            });
    }
};

export default cssController;