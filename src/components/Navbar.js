import React from "react";

const styles = {
    navStyle : {
        marginLeft: "20px"
    },

    ulStyle : {
        listStyleType: "none",
        marginTop: "20px"
    }
};


const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className = "navbar-nav mr-auto" style = {styles.ulStyle}>
    <li className="nav-item active">
        <a className="nav-link" href="/">NYT React<span className="sr-only">(current)</span></a>
    </li>
    <li className = "nav-item" style ={styles.navStyle} >
    <a className="nav-link" href = "/saved">Saved Articles</a>
    </li>
    </ul>
    </div>
    </nav>

)

export default Navbar;

