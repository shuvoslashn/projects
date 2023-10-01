import React from "react";
import SubHeading from "./SubHeading";
import SingleFeature from "./SingleFeature";

const Features = () => {
    return (
        <section className='py-24 relative border-y-2 border-black'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='49'
                height='87'
                viewBox='0 0 49 87'
                fill='none'
                className='absolute top-16 lg:top-28 left-8 lg:left-28 hidden lg:block'
            >
                <path
                    d='M31.3761 39.5349H45.915L13.3351 81.0269L19.1003 48.9224L19.4173 47.1573H17.6239H3.08498L35.6649 5.66538L29.8997 37.7698L29.5827 39.5349H31.3761Z'
                    fill='white'
                    stroke='#312E37'
                    stroke-width='3'
                />
            </svg>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='95'
                height='87'
                viewBox='0 0 95 87'
                fill='none'
                className='absolute top-8 lg:top-16 right-8 lg:right-28 hidden lg:block'
            >
                <path
                    d='M32.6159 0.841268C32.6159 0.841251 32.6159 0.841234 32.6159 0.841217C32.6699 0.386252 33.3301 0.386271 33.3841 0.841217C33.3841 0.841233 33.3842 0.84125 33.3842 0.841267L34.4224 9.59163C35.7903 21.1202 44.8798 30.2097 56.4083 31.5776L65.1587 32.6159C65.6138 32.6699 65.6138 33.3301 65.1586 33.3841L56.4083 34.4224C44.8798 35.7903 35.7903 44.8798 34.4224 56.4083L33.3841 65.1587C33.3301 65.6138 32.6699 65.6138 32.6159 65.1586L31.5776 56.4083C30.2097 44.8798 21.1202 35.7903 9.59163 34.4224L0.841267 33.3842C0.84125 33.3842 0.841233 33.3841 0.841217 33.3841C0.386271 33.3301 0.386252 32.6699 0.841217 32.6159C0.841234 32.6159 0.841251 32.6159 0.841268 32.6159L9.59163 31.5776C21.1202 30.2097 30.2097 21.1202 31.5776 9.59163L32.6159 0.841268Z'
                    fill='white'
                    stroke='black'
                />
                <path
                    d='M74.4494 46.5449C74.4519 46.524 74.4566 46.5151 74.4576 46.5133C74.4586 46.5114 74.4591 46.5109 74.4599 46.5103C74.4628 46.508 74.4761 46.5 74.5 46.5C74.5239 46.5 74.5372 46.508 74.5401 46.5103C74.5409 46.5109 74.5414 46.5114 74.5425 46.5133C74.5434 46.5151 74.5481 46.524 74.5506 46.5449L75.1955 51.9808C76.0556 59.2294 81.7706 64.9444 89.0192 65.8045L94.455 66.4494C94.455 66.4494 94.455 66.4494 94.4551 66.4494C94.476 66.4519 94.4849 66.4566 94.4867 66.4576C94.4886 66.4586 94.4891 66.4592 94.4897 66.4599C94.492 66.4628 94.5 66.4761 94.5 66.5C94.5 66.5239 94.492 66.5372 94.4897 66.5401C94.4891 66.5408 94.4886 66.5414 94.4867 66.5424C94.4849 66.5434 94.476 66.5481 94.4551 66.5506C94.455 66.5506 94.455 66.5506 94.455 66.5506L89.0192 67.1955C81.7706 68.0556 76.0556 73.7706 75.1955 81.0192L74.5506 86.455C74.5506 86.455 74.5506 86.455 74.5506 86.4551C74.5481 86.476 74.5434 86.4849 74.5424 86.4867C74.5414 86.4886 74.5408 86.4891 74.5401 86.4897C74.5372 86.492 74.5239 86.5 74.5 86.5C74.4761 86.5 74.4628 86.492 74.4599 86.4897C74.4592 86.4891 74.4586 86.4886 74.4576 86.4867C74.4566 86.4849 74.4519 86.476 74.4494 86.4551C74.4494 86.455 74.4494 86.455 74.4494 86.455L73.8045 81.0192C72.9444 73.7706 67.2294 68.0556 59.9808 67.1955L54.5449 66.5506C54.524 66.5481 54.5151 66.5434 54.5133 66.5425C54.5114 66.5414 54.5109 66.5409 54.5103 66.5401C54.508 66.5372 54.5 66.5239 54.5 66.5C54.5 66.4761 54.508 66.4628 54.5103 66.4599C54.5109 66.4591 54.5114 66.4586 54.5133 66.4576C54.5151 66.4566 54.524 66.4519 54.5449 66.4494L59.9808 65.8045C67.2294 64.9444 72.9444 59.2294 73.8045 51.9808L74.4494 46.5449Z'
                    fill='white'
                    stroke='black'
                />
            </svg>
            <div className='container max-w-7xl'>
                <SubHeading
                    title={"What I do"}
                    headline={
                        "the service i offer is specifically designed to meet your needs."
                    }
                    allign={"text-center"}
                />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-16'>
                    <SingleFeature
                        bgColor={"bg-[#E3E3FF]"}
                        title={"strategy & planning"}
                        text={
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        }
                    />
                    <SingleFeature
                        bgColor={"bg-[#F2FFE3]"}
                        title={"strategy & planning"}
                        text={
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        }
                    />
                    <SingleFeature
                        bgColor={"bg-[#FDE4F9]"}
                        title={"strategy & planning"}
                        text={
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        }
                    />
                    <SingleFeature
                        bgColor={"bg-[#E2F2FF]"}
                        title={"strategy & planning"}
                        text={
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        }
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;
