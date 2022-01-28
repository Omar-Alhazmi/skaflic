import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import "swiper/swiper.min.css";
import "swiper/modules/effect-cube/effect-cube.min.css"
import "swiper/modules/autoplay/autoplay.min.css"
import Logo_s from '../../images/_Social Media Kit_Snapchat Picture.jpg';


import "./styles.css";
import SwiperCore, {
    EffectCube, Pagination,Autoplay,Navigation
} from 'swiper';


SwiperCore.use([Autoplay,Pagination,EffectCube,Navigation]);


export default function Team() {
    return (
        <>
            <Swiper effect={'cube'} slidesPerView={1} loop={true} 
            // speed={600}
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
                }} navigation={true}  className="mySwiper">
                <SwiperSlide>
                    <div className="textContainer">
                        <div className="title" data-swiper-parallax="-300">Name</div>
                        <div className="subtitle" data-swiper-parallax="-200">Position</div>
                    </div>
                    <img alt="background" src={Logo_s} /></SwiperSlide>
                <SwiperSlide>
                    <div className="textContainer">
                        <div className="title" data-swiper-parallax="-300">Name</div>
                        <div className="subtitle" data-swiper-parallax="-200">Position</div>
                    </div>
                    <img alt="background" src={Logo_s} />
                </SwiperSlide>
                <SwiperSlide>
                    <div className="textContainer">
                        <div className="title" data-swiper-parallax="-300">Name</div>
                        <div className="subtitle" data-swiper-parallax="-200">Position</div>
                    </div>
                    <img alt="background" src={Logo_s} />
                </SwiperSlide>
                <SwiperSlide>
                    <div className="textContainer">
                        <div className="title" data-swiper-parallax="-300">Name</div>
                        <div className="subtitle" data-swiper-parallax="-200">Position</div>
                    </div>
                    <img alt="background" src={Logo_s} />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
