import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
    <nav className = "navbar navbar-expand-lg navbar-light bg-light">
        <Link to={"/"}>NYT React Search</Link>
        <Link to={"/SavedArticles"}>Saved Articles</Link>
    </nav>
    );

export default Navbar;