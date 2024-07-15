import React from "react";
import './main.css';
import img2 from '../../Assets/img(2).jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

// the array named data
const Data = [
    
    {
        id:2,
        imgSrc:img2,
        destTitle:'Machu Picchu',
        location:'Peru',
        grade:'CULTURAL RELAX',
        fees:'$600',
        description:'Peru is the third largest country in South America, after Brazil and Argentina. It is made up of a variety of landscapes, from mountains and beaches to deserts and rain forests. Most people live along the coast of the Pacific Ocean, where the capital, Lima, is located.'
    },
    {
        id:3,
        imgSrc:img3,
        destTitle:'Great barrier reef',
        location:'Australia',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'Australia is a stable, democratic and culturally diverse nation with a highly skilled workforce and one of the strongest performing economies in the world. '
    },
    {
        id:4,
        imgSrc:img4,
        destTitle:'Cappadocia',
        location:'Turkey',
        grade:'CULTURAL RELAX',
        fees:'$720',
        description:'Turkey is a large peninsula that bridges the continents of Europe and Asia. Turkey is surrounded on three sides by the Black Sea, the Mediterranean Sea, and the Aegean Sea. Istanbul, the largest city in Turkey, is built on land in the Bosporus seaway.'
    },
    {
        id:5,
        imgSrc:img5,
        destTitle:'Gods Own Country',
        location:'kerala',
        grade:'CULTURAL RELAX',
        fees:'$500',
        description:'Kerala, located on the south-western tip of India, enjoys unique geographical features that have made it one of the most sought-after tourist destinations in Asia. Fondly referred to as Gods Own Country, Kerala was selected by the National Geographic Traveller as one of the 50 destinations of a lifetime and one of the thirteen paradises in the world.'
    },
    {
        id:6,
        imgSrc:img6,
        destTitle:'Pearl of the Orient',
        location:'Goa',
        grade:'CULTURAL RELAX',
        fees:'$1000',
        description:'The magical land of Goa is a land of celebrations and festivities. Snuggled in the Konkan Coast Belt, It has a long coastline of approx 100 kilometers. Goa is primarily known for its beautiful beaches which are engrossed with oscillating palm trees and an astonishing nightlife.'
    },
    {
        id:7,
        imgSrc:img7,
        destTitle:'Taj mahal',
        location:'Dehli',
        grade:'CULTURAL RELAX',
        fees:'$550',
        description:'It is the melting pot of various cultures and communities, languages, culinary traditions, architectural designs, religions and more. There are over 1200 recognised heritage landmarks within the city, including the Red Fort, Qutub Minar and Humayuns Tomb.'
    },
    {
        id:8,
        imgSrc:img8,
        destTitle:'City of Dreams',
        location:'Mumbai',
        grade:'CULTURAL RELAX',
        fees:'$1300',
        description:'Mumbai has number of beautiful temples, mosques & churches. The list of religious places in Mumbai includes Siddhivinayak Temple, Mahalaxmi Temple, Haji Ali Dargah, Global Vipassana Pagoda, St Thomas Cathedral, Iskcon Temple, the Mount Bandra Church and many more.'
    },
    {
        id:9,
        imgSrc:img9,
        destTitle:'Detroit of Asia',
        location:'Chennai',
        grade:'CULTURAL RELAX',
        fees:'$850',
        description:'Ancient temples, vibrant arts, natural wonders and a bustling culinary scene make Chennai, the capital of Tamil Nadu, one of the most popular tourist destinations in the southern fringes of the country. Located on the Coromandel Coast, this busy metropolis was formerly called Madras.'
    }
]


const Main = () => {
    return (
        <section class="main container section">
            <div class="secTitle">
                <h3 class="title">
                    Most visited destinations
                </h3>
            </div>

            <div class="secContent grid">
                {/*here we are going to use high order array method(map).
                to do that we shall use a list of object in one array.
                I'm going to createa an array named data and from that
                we shall map() array to fetch desitnation at once i hope this
                make sence to you! */}

                {
                    Data.map(({ id, imgSrc, destTitle, location, grade, fees,
                        description }) => {
                        return (
                            <div key={id}
                                className="singleDestination">

                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div class="cardInfo">
                                    <h4 class="destTitle">{destTitle}</h4>
                                    <span class="continent flex">
                                        <HiOutlineLocationMarker class="icon" />
                                        <span className="name">{location}</span>
                                    </span>

                                    <div class="fees flex">
                                        <div class="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div class="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div class="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button class="btn flex">
                                        DETAILS <HiOutlineClipboardCheck class="icon" />
                                    </button>
                                </div>


                            </div>
                        )
                    })
                }


            </div>
        </section >
    )
}

export default Main