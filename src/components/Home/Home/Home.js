import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Header from '../Header/Header';
import MyProjects from '../MyProjects/MyProjects';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AboutMe></AboutMe>
            <MyProjects></MyProjects>
        </div>
    );
};

export default Home;