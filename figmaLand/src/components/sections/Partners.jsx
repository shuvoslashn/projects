import React from "react";
import Marquee from "react-fast-marquee";
import SectionHeading from "../SectionHeading";
import airbnb from "../../assets/companyLogo/airbnb.png";
import calandy from "../../assets/companyLogo/calandy.png";
import canva from "../../assets/companyLogo/canva.png";
import coinbase from "../../assets/companyLogo/coinbase.png";
import descript from "../../assets/companyLogo/descript.png";
import google from "../../assets/companyLogo/google.png";
import opendoor from "../../assets/companyLogo/opendoor.png";
import spotify from "../../assets/companyLogo/spotify.png";
import upwork from "../../assets/companyLogo/upwork.png";

const Partners = () => {
    return (
        <section className='py-16 md:py-24'>
            <SectionHeading
                title={`Partners`}
                text={`We focus on ergonomics and meeting you where you work. It's only a keystroke away.`}
            />
            <div className='mt-8 md:mt-16 flex flex-col gap-8'>
                <Marquee speed={10} autoFill={true} className=' z-0'>
                    <img className='mx-5' src={airbnb} alt='airbnb' />
                    <img className='mx-5' src={calandy} alt='calandy' />
                    <img className='mx-5' src={canva} alt='canva' />
                    <img className='mx-5' src={coinbase} alt='coinbase' />
                    <img className='mx-5' src={descript} alt='descript' />
                    <img className='mx-5' src={google} alt='google' />
                    <img className='mx-5' src={opendoor} alt='opendoor' />
                    <img className='mx-5' src={spotify} alt='spotify' />
                    <img className='mx-5' src={upwork} alt='upwork' />
                </Marquee>
                <Marquee
                    speed={10}
                    autoFill={true}
                    direction=''
                    className=' z-0'
                >
                    <img className='mx-5' src={coinbase} alt='coinbase' />
                    <img className='mx-5' src={calandy} alt='calandy' />
                    <img className='mx-5' src={google} alt='google' />
                    <img className='mx-5' src={canva} alt='canva' />
                    <img className='mx-5' src={descript} alt='descript' />
                    <img className='mx-5' src={upwork} alt='upwork' />
                    <img className='mx-5' src={airbnb} alt='airbnb' />
                    <img className='mx-5' src={opendoor} alt='opendoor' />
                    <img className='mx-5' src={spotify} alt='spotify' />
                </Marquee>
            </div>
        </section>
    );
};

export default Partners;
