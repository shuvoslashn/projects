import React from "react";

const Button = ({ children, sx, style }) => {
    return (
        <>
            {sx === "outline" ? (
                <button
                    className={` rounded-sm inline-block ${
                        style ? style : "px-8 py-4"
                    }  border border-zinc-500 text-zinc-400 hover:text-white hover:border-white duration-300`}
                >
                    {children}
                </button>
            ) : (
                <button
                    className={` rounded-sm inline-block ${
                        style ? style : "px-8 py-4"
                    } bg-[#4452FE] border border-[#4452FE] text-white hover:bg-opacity-80 duration-300 hover:border-opacity-80`}
                >
                    {children}
                </button>
            )}
        </>
    );
};

export default Button;
