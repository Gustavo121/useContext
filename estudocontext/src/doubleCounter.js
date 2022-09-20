import { useEffect, useState } from "react"

export function DoubleCounter({counter}) {
    const [DoubleCounter, setDoubleCounter] = useState(0);

    useEffect(() => {
        setDoubleCounter(counter * 2);
    }, [counter]);

    return (
        <h1>Dobro de Counter: {DoubleCounter}</h1>
    )
}