import { useState } from "react";
import "./App.css";
import Result from "./components/result/Result";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Result />
        </>
    );
}

export default App;
