import React from "react";
import Background from './retail.jpeg';

const styles = {
    jumbotronStyle : {
        backgroundImage: `url(${Background})`,
        height: "400px",

    }

};

const Header = () => (
    <div className = "jumbotron text-center" style= {styles.jumbotronStyle}>
        <div className = "container">
            <div className = "row">
                <h1>New York Times Article Scrubber</h1>
                <h2>Search for and annotate articles of interest!</h2>
            </div>
        </div>
    </div>
)

export default Header;