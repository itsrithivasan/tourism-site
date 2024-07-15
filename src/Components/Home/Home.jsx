import React from "react";
import './home.css';
import video from '../../Assets/video.mp4';
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { SiTripadvisor } from 'react-icons/si';
import { BsListTask } from 'react-icons/bs';
import { TbApps } from 'react-icons/tb';

import Aos from "aos";
import 'aos/dist/aos.css'

const Home = () => {
    return (
        <section className="home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>

            <div class="homeContent Container">
                <div class="textDiv">

                    <span class="smallText">
                        Our Packages
                    </span>

                    <h1 class="homeTitle">
                        Search your Holiday
                    </h1>
                </div>

                <div className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Search Your destination:</label>
                        <div className="input flex">
                            <input type="text" placeholder="Enter name here....." />
                            <GrLocation className="icon" />
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="date">Search Your date:</label>
                        <div className="input flex">
                            <input type="date" />
                        </div>
                    </div>

                    <div className="priceInput">
                        <div class="label_total flex">
                            <label htmlFor="price">Max price:</label>
                            <h3 class="total">$5000</h3>
                        </div>
                        <div class="input flex">
                            <input type="range" max="5000" min="1000" />
                        </div>
                    </div>

                    <div class="searchOptions flex">
                        <HiFilter className="icon" />
                        <span>More Filters</span>
                    </div>
                </div>

                <div class="homeFooterIcons flex">
                    <div class="rightIcons">
                        <FiFacebook class="icon" />
                        <AiOutlineInstagram class="icon" />
                        <SiTripadvisor class="icon" />
                    </div>
                    <div class="leftIcons">
                        <BsListTask class="icon" />
                        <TbApps class="icon" />
                    </div>
                </div>
            </div>



        </section>
    )
}

export default Home