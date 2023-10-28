import React from "react";
import Marquee from "react-fast-marquee";
import SubHeading from "./SubHeading";
import { testimonial } from "./../data/testimonial";
import { Link } from "react-router-dom";
import { AnchorSection } from "react-anchor-navigation";

const Testimonial = () => {
    return (
        <AnchorSection id='testimonial'>
            <section className='py-24'>
                <div className=''>
                    <SubHeading
                        title={"I have some freelace work"}
                        headline={"What my client say about me?"}
                        allign={"text-center"}
                    />
                    <div className='mt-16 flex flex-col gap-8'>
                        <Marquee pauseOnHover={true} className='z-0'>
                            {testimonial.map((e, i) => {
                                return (
                                    <div
                                        key={i}
                                        className='mx-4 max-w-md p-8 rounded-xl border border-black'
                                    >
                                        <div className='flex justify-start items-center'>
                                            {e.rating}{" "}
                                            <i class='ri-star-s-fill'></i>
                                        </div>
                                        <h5 className='text-xl font-bold'>
                                            {e.name}
                                        </h5>
                                        <h6 className='text-gray-500'>
                                            {e.country}
                                        </h6>
                                        <p className='text-xl mt-2'>
                                            {e.text.substring(0, 100)}
                                            {e.text.length > 100 ? "..." : ""}
                                        </p>
                                    </div>
                                );
                            })}
                        </Marquee>
                        <Marquee
                            pauseOnHover={true}
                            direction='right'
                            className='z-0'
                        >
                            {testimonial.map((e, i) => {
                                return (
                                    <div
                                        key={i}
                                        className='mx-4 max-w-md p-8 rounded-xl border border-black'
                                    >
                                        <div className='flex justify-start items-center'>
                                            {e.rating}{" "}
                                            <i class='ri-star-s-fill'></i>
                                        </div>
                                        <h5 className='text-xl font-bold'>
                                            {e.name}
                                        </h5>
                                        <h6 className='text-gray-500'>
                                            {e.country}
                                        </h6>
                                        <p className='text-xl mt-2'>
                                            {e.text.substring(0, 100)}
                                            {e.text.length > 100 ? "..." : ""}
                                        </p>
                                    </div>
                                );
                            })}
                        </Marquee>
                    </div>
                </div>
                <div className='text-center mt-16 h-12'>
                    <Link
                        target='_blank'
                        to={"https://fiverr.com/shuvo_official"}
                        className='bg-[#E3E3FF] text-xl font-semibold px-8 py-3 shadow-btn inline-block'
                    >
                        View in fiverr.com
                    </Link>
                </div>
            </section>
        </AnchorSection>
    );
};

export default Testimonial;
