import React, { useState } from "react";
import "./style.css";

function getInitialCounter(){
    return Math.trunc(Math.random() * 10)
}

export default function TestUseState() {
    // Чтобы вызвать функцию инициации только один раз можно испольщовать колбэк внутри стейта
    let [counter, setCounter]= useState(() => {
        return getInitialCounter()
    });
    let increment = () => {
        setCounter(prev => prev +1)
    }
    let decrement = () => {
        setCounter(prev => prev - 1)
    }
    // Стэйт с объектом
    let [state, setState] = useState({
        title: 'Счётчик',
        date: Date.now()
    })
    let changeTitle = () => {
        setState(prev => {
            return {
                ...prev,
                title: 'Новый титул'
            }
        })
    }
    return (
        <div>
            <h1>Счётчик: {counter}</h1>
            <button onClick={increment} className="btn btn_inc">Добавить</button>
            <button onClick={decrement} className="btn btn_dec">Убрать</button>
            <pre className="pre_formatter">{JSON.stringify(state, null, 2)}</pre>
            <button onClick={changeTitle} className="btn btn_title">Изменить титул</button>
        </div>
    )
}