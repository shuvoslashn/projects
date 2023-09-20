import { useState } from "react";

const App = () => {
    const [length, setLength] = useState(8);
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    return (
        <div>
            <h1 className='text-zinc-200 text-center pt-8 text-2xl md:text-5xl font-semibold'>
                Random Password Generator
            </h1>
        </div>
    );
};

export default App;
