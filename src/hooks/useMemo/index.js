import React, {useState, useMemo, useEffect} from "react";
import "./style.css";

function complexCompute(num) {
    let i = 0
    while (i < 100000000) i++
    return num * 2
}

export default function TestUseMemo(){
    let [number, setNumber] = useState(42)
    let [colored, setColored] = useState(false)
    let styles = useMemo(() => {
        return {
            color: colored ? "lightgray" : "black"
        }
    }, [colored])
    // Как-бы кэшируем значение намбер, и вызываем эту функцию только в том случае если оно изменилось
    let computed = useMemo(() => {
        return complexCompute(number)
    }, [number])

    useEffect( () => {
        console.log('Styles changed')
    }, [styles])
    return (
        <div>
            <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
            <button onClick={() => setNumber(prev => prev + 1) } className="btn btn_inc">Добавить</button>
            <button onClick={() => setNumber(prev => prev - 1) } className="btn btn_dec">Убрать</button>
            <button onClick={() => setColored(prev => !prev) } className="btn btn_title">Изменить цвет</button>
        </div>
    )
}