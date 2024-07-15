import React, {useState} from "react";
import './navbar.css';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";


const Navbar = () => {
    const [active, setActive] = useState('navBar')
    // function to toggle navBar
    const showNav = ()=>{
        setActive('navBar activeNavbar')
    }

    // function to remove navBar
    const removeNavbar = ()=>{
        setActive('navBar')
    }

    return (
        <section class="navBarSection">
            <header class="header flex">

                <div class="logoDiv">
                    <a href="#" class="logo">
                        <h1><MdOutlineTravelExplore class="icon" />Travel.</h1>
                    </a>
                </div>


                <div class={active}>
                    <ul class="navLists flex">
                        <li class="navItem">
                            <a href="#" class="navLink">Home</a>
                        </li>

                        <li class="navItem">
                            <a href="#" class="navLink">Packages</a>
                        </li>

                        <li class="navItem">
                            <a href="#" class="navLink">Shop</a>
                        </li>

                        <li class="navItem">
                            <a href="#" class="navLink">About</a>
                        </li>

                        <li class="navItem">
                            <a href="#" class="navLink">Pages</a>
                        </li>

                        <li class="navItem">
                            <a href="#" class="navLink">News</a>
                        </li>

                        <li class="navItem">
                            <a href="#" class="navLink">Contact</a>
                        </li>

                        <button class="btn">
                            <a href="#">BOOK NOW</a>
                        </button>
                    </ul>

                    <div onClick={removeNavbar} class="closeNavbar">
                        <AiFillCloseCircle class="icon" />
                    </div>
                </div>

                <div onClick={showNav} class="toggleNavbar">
                    <TbGridDots class="icon" />
                </div>
            </header>
        </section>
    )
}

export default Navbar