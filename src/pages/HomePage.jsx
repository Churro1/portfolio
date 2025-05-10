import React from 'react';
import Landing from '../components/Landing.jsx';
import Navigation from '../components/Navigation.jsx';
import '../styles/App.css'

function HomePage() {

    return (
        <>
            <div className="homepage">
            <Navigation />
            <Landing />
            </div>
        </>
    )
};

export default HomePage;