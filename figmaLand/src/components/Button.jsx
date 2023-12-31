import React from "react";

const Button = ({ children, sx, style }) => {
    return (
        <>
            {sx === "outline" ? (
                <button
                    className={` rounded-sm inline-block ${
                        style ? style : "px-8 py-3"
                    }  border tracking-wider  border-zinc-500 text-zinc-400 hover:text-white hover:border-white duration-300`}
                >
                    {children}
                </button>
            ) : (
                <button
                    className={` rounded-sm inline-block ${
                        style ? style : "px-8 py-3"
                    } bg-[#4452FE] border tracking-wider border-[#4452FE] text-white hover:bg-opacity-75 duration-300 hover:border-opacity-75`}
                >
                    {children}
                </button>
            )}
        </>
    );
};

export default Button;
