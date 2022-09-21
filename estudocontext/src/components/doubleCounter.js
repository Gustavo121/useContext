import { useContext } from "react"
import { CounterContext } from "../contexts/CounterContext";

export function DoubleCounter() {
    const {DoubleCounter} = useContext(CounterContext)

    return (
        <h1>Dobro de Counter: {DoubleCounter}</h1>
    )
}