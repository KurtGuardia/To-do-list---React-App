import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>ToDoList</h1>
            <Link to="/" style={LinkStyle}>Home</Link> | <Link to="/about" style={LinkStyle}>About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center'
}

const LinkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;