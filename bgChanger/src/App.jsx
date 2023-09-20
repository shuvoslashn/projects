import React, { useState } from "react";

const App = () => {
    const [color, setColor] = useState(localStorage.getItem("color"));

    const handleColor = (seletedColor) => {
        setColor(seletedColor);
    };

    localStorage.setItem("color", color);

    return (
        <div
            className={`h-screen w-full bg-${localStorage.getItem(
                "color"
            )}-500 flex items-end justify-center duration-1000`}
        >
            {/* color pallete */}
            <div className='flex justify-center mb-10'>
                <div className='bg-white border shadow-2xl flex gap-2 py-2 px-3 rounded-full'>
                    <button
                        onClick={() => handleColor("red")}
                        className='bg-red-500 text-white'
                    >
                        red
                    </button>
                    <button
                        onClick={() => handleColor("blue")}
                        className='bg-blue-500 text-white'
                    >
                        Blue
                    </button>
                    <button
                        onClick={() => handleColor("green")}
                        className='bg-green-500 text-white'
                    >
                        green
                    </button>
                    <button
                        onClick={() => handleColor("orange")}
                        className='bg-orange-500 text-white'
                    >
                        orange
                    </button>
                    <button
                        onClick={() => handleColor("indigo")}
                        className='bg-indigo-500 text-white'
                    >
                        indigo
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;
