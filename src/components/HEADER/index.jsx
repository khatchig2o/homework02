import React from "react";

export default function Header(){
    return<header>
        <h1>Chicanery</h1>

        <ul>
            <li><a  className='active' href='/'>Home</a> </li>
            <li><a href='/'>Another link</a></li>
            <li><a href='/'>Third link</a></li>
            <li><a href='/'>About</a></li>
            <li><a href='/'>Contact</a></li>
        </ul>
    </header>
}