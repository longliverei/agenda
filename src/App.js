import React from "react";
import './App.css';
import Searchbar from "./utils/Searchbar/index";

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <div className="search-box">
                    <li className="title">Agenda de contatos</li>
                    <Searchbar />
                </div>
                <li>Contatos</li>
                <li>Adicionar novo contato</li>
            </ul>
        </nav>
    )
}