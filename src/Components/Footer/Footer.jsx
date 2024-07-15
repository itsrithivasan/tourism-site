import React from "react";
import './footer.css';
import video2 from '../../Assets/video2.mp4';
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"
import { FaTripadvisor } from "react-icons/fa";

const Footer = () => {
    return (
        <section class="footer">
            <div class="videoDiv">
                <video src={video2} muted autoPlay loop type="video/mp4"></video>
            </div>

            <div class="secContent container">
                <div class="contactDiv flex">
                    <div class="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div class="inputDiv flex">
                        <input type="text" placeholder="Enter email address..." />
                        <button class="btn flex" type="submit">
                            SEND<FiSend class="icon" />
                        </button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Footer