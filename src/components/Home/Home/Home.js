import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MyProjects from '../MyProjects/MyProjects';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AboutMe></AboutMe>
            <MyProjects></MyProjects>
            <Blog></Blog>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;