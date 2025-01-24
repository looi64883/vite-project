import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount((prevValue) => prevValue + 1);
    }

    function incrementFive() {
        increment();
        increment();
        increment();
        increment();
        increment();
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>+1</button>

            <button onClick={incrementFive}>+5</button>
        </div>
    )
}