import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer text-center mt-5">
            <p>Copyright © MD Mahe Alam {(new Date()).getFullYear()} All Rights Reserved.</p>
        </div>
    );
};

export default Footer;