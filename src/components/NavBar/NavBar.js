import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../logoPeli.png'

import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div>
                <img id="logoPeli" src={Logo} className="logo"  alt="" />
                <span className="nombre">MI LISTA DE PELICULAS</span>
                <img id="logoPeli2" src={Logo} className="logo2"  alt="" />
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink className="tohome" exact to="/" >Home</NavLink>
                        <NavLink className="tofavs" to="/favs" >Favoritas</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}