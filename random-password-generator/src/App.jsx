import { useCallback, useState } from "react";

const App = () => {
    const [length, setLength] = useState(8);
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const passGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        numAllowed & (str += "0123456789");
        charAllowed & (str += "!@#$%^&*-_+=[]{}~`");

        length.forEach((item) => {
            let char = Math.floor(Math.random() * str.length + 1);
            pass = str.charAt(char);
        });

        setPassword(pass);
    }, [length, numAllowed, charAllowed, setPassword]);

    return (
        <div>
            <h1 className='text-zinc-200 text-center pt-8 text-2xl md:text-5xl font-semibold'>
                Random Password Generator
            </h1>
            {/* pass generator */}
            <div className='mt-8 p-8 bg-zinc-500/5 mx-8 rounded-3xl max-w-lg text-xl'>
                <div className='flex'>
                    <input
                        type='text'
                        value={password}
                        placeholder='Password'
                        className='bg-white/10 px-4 py-2 rounded-l-lg focus:bg-rose-300/10 w-full focus:outline-none'
                        readOnly
                    />
                    <button className='px-8 py-2 bg-rose-500 rounded-r-lg text-white font-bold hover:bg-rose-600 shadow-lg shadow-rose-600/30'>
                        Copy
                    </button>
                </div>
                <div className='flex mt-4 gap-6'>
                    {/* range meter */}
                    <div className='flex gap-3 items-center'>
                        <input
                            type='range'
                            min={8}
                            max={30}
                            value={length}
                            onChange={(e) => setLength(e.target.value)}
                            className='mt-1 appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-zinc-950 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-[50px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-rose-500 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-rose-500/30 [&::-webkit-slider-thumb]:cursor-pointer'
                        />
                        <label>Length: {length}</label>
                    </div>

                    {/* number checkbox */}
                    <div className='flex gap-3 items-center'>
                        <input
                            type='checkbox'
                            className='checked:accent-rose-500 '
                        />
                        <label>Length: {length}</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
