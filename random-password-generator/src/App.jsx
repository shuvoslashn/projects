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
        </div>
    );
};

export default App;
