import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import "swiper/swiper.min.css";
import "swiper/modules/effect-cube/effect-cube.min.css"
import "swiper/modules/autoplay/autoplay.min.css"
import Logo_s from '../../images/SnapchatPicture.jpg';


import "./styles.css";
import SwiperCore, {
    EffectCube, Pagination,Autoplay,Navigation
} from 'swiper';


SwiperCore.use([Autoplay,Pagination,EffectCube,Navigation]);


export default function Team() {
    return (
        <>
            <Swiper effect={'cube'} 
            //  loop={true} 
             parallax={true} grabCursor={true} 
             cubeEffect={{
                "shadow": true,
                "slideShadows": true,
                "shadowOffset": 20,
                "shadowScale": 0.94
            }}
                autoplay={{
                    "delay": 5000,
                    "disableOnInteraction": false
                }} 
                navigation={true}

                className="mySwiper">
                <SwiperSlide>
                    <div className="textContainer">
                        <div className="title" data-swiper-parallax="-300">Name</div>
                        <div className="subtitle" data-swiper-parallax="-200">Position</div>
                    </div>
                    <div className="info">
                        <h1>Title</h1>
                        <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                    </div>
                    <img alt="background" src={Logo_s} /></SwiperSlide>
                <SwiperSlide>
                    <div className="textContainer">
                        <div className="title" data-swiper-parallax="-300">Name</div>
                        <div className="subtitle" data-swiper-parallax="-200">Position</div>
                    </div>
                    <div className="info">
                        <h1>Title</h1>
                        <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                    </div>
                    <img alt="background" src={Logo_s} />
                </SwiperSlide>
                <SwiperSlide>
                    <div className="textContainer">
                        <div className="title" data-swiper-parallax="-300">Name</div>
                        <div className="subtitle" data-swiper-parallax="-200">Position</div>
                    </div>
                    <div className="info">
                        <h1>Title</h1>
                        <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                    </div>
                    <img alt="background" src={Logo_s} />
                </SwiperSlide>
                <SwiperSlide>
                    <div className="textContainer">
                        <div className="title" data-swiper-parallax="-300">Name</div>
                        <div className="subtitle" data-swiper-parallax="-200">Position</div>
                    </div>
                    <div className="info">
                        <h1>Title</h1>
                        <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                    </div>
                    <img alt="background" src={Logo_s} />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
