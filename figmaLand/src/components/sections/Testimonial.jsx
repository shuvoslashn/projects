import React from "react";
import SectionHeading from "../SectionHeading";
import per1 from "../../assets/testimonial/per1.png";
import per2 from "../../assets/testimonial/per2.png";
import per3 from "../../assets/testimonial/per3.png";
import per4 from "../../assets/testimonial/per4.png";
import SingleTestimonial from "../SingleTestimonial";

const Testimonial = () => {
    return (
        <section className='py-16 md:py-24 bg-zinc-900/50' id='testimonial'>
            <div className='container'>
                <SectionHeading
                    title={"Testimonial"}
                    text={
                        "We focus on ergonomics and meeting you where you work. It's only a keystroke away."
                    }
                />
                <div className='grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-16 gap-8 max-w-6xl mx-auto'>
                    <SingleTestimonial
                        per={per1}
                        name={"Claire Bell"}
                        text={
                            "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year."
                        }
                    />
                    <SingleTestimonial
                        per={per2}
                        name={"Francisco Lane"}
                        text={
                            "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year."
                        }
                    />
                    <SingleTestimonial
                        per={per3}
                        name={"Ralph Fisher"}
                        text={
                            "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year."
                        }
                    />
                    <SingleTestimonial
                        per={per4}
                        name={"Jorge Murphy"}
                        text={
                            "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year."
                        }
                    />
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
