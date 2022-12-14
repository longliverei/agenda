import React from "react";
import './style.css';
import Login from "../../utils/Login";
import Searchbar from "../../utils/Searchbar/index";

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <div className="utils-navbar">
                    <li className="title">Agenda de contatos</li>
                    <Searchbar />
                    <Login />
                </div>
                <div className="sidebar">
                    <li>Contatos</li>
                    <li>Adicionar novo contato</li>
                </div>
            </ul>
        </nav>
    )
}