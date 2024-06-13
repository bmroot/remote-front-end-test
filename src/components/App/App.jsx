import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from '../Header';
import SortAndFilter from '../SortAndFilter';
import PropertyListing from '../PropertyListing';

const App = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        async function getProperties() {
            const res = await fetch('http://localhost:3000/api/properties');
            const data = await res.json();
            return data;
        }

        getProperties().then((data) => setProperties(data));
    }, []);

    return (
        <div className="App">
            <Header />
            <main>
                <SortAndFilter />
                <PropertyListing properties={properties} />
            </main>
        </div>
    );
};

export default App;
