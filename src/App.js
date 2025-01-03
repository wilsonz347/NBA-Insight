import React, { useState } from "react";

function App() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search players..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
        </div>
    );
}

export default App;