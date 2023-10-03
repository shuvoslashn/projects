import React, { useEffect } from "react";
import SectionHeading from "../SectionHeading";
import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";

const Gallery = () => {
    useEffect(() => {
        initLightboxJS("Insert License key", "Insert plan type here");
    });
    return (
        <section className='py-16 md:py-24 bg-zinc-900/50'>
            <div className='container'>
                <SectionHeading
                    title={"Gallery"}
                    text={`We focus on ergonomics and meeting you where you work. It's only a keystroke away.`}
                />
                <div className='mt-16'>
                    <SlideshowLightbox
                        className='container grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto'
                        showThumbnails={true}
                    >
                        <img
                            className='w-full h-80 object-cover rounded border-2 border-white/10'
                            src='https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                            loading='lazy'
                        />
                        <img
                            className='w-full h-80 object-cover rounded border-2 border-white/10'
                            src='https://images.unsplash.com/photo-1514230116685-21a28c232c24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
                            loading='lazy'
                        />
                        <img
                            className='w-full h-80 object-cover rounded border-2 border-white/10'
                            src='https://images.unsplash.com/photo-1548586196-aa5803b77379?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
                            loading='lazy'
                        />
                        <img
                            className='w-full h-80 object-cover rounded border-2 border-white/10'
                            src='https://images.unsplash.com/photo-1628566859646-48ca623cfca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80'
                            loading='lazy'
                        />
                        <img
                            className='w-full h-80 object-cover rounded border-2 border-white/10'
                            src='https://images.unsplash.com/photo-1512952663859-99b088280430?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80'
                            loading='lazy'
                        />
                        <img
                            className='w-full h-80 object-cover rounded border-2 border-white/10'
                            src='https://images.unsplash.com/photo-1550639264-38c3059c4620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
                            loading='lazy'
                        />
                    </SlideshowLightbox>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
