import { createContext, useEffect, useState } from "react";

export const CounterContext = createContext();

export function CounterContextProvider({children}) {
    const [counter, setCounter] = useState(0);
    const [DoubleCounter, setDoubleCounter] = useState(0);

    function increaseCounter() {
        setCounter(counter + 1);
    }

    useEffect(() => {
        setDoubleCounter(counter * 2);
    }, [counter]);

    return (
        <CounterContext.Provider value={{counter, setCounter, DoubleCounter, increaseCounter}}>
            {children}
        </CounterContext.Provider>
    )
}