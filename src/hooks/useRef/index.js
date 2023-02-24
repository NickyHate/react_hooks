import React, {useState, useEffect, useRef} from "react";
import "./style.css";

export default function TestUseRef(){
    let [value, setValue] = useState('initial')
    let prevValue = useRef('')
    // Не перерисовывает компонент, но сохраняет своё состояние между рендерами
    let renderCount = useRef(1)
    let inputRef = useRef(null)
    // Делаем фокус на дом элементе без перерисовки
    let focus = () => {
        inputRef.current.focus()
    }

    useEffect(() => {
        renderCount.current++
    })
    // Получаем предыдщее значение стейта
    useEffect( () => {
        prevValue.current = value
    }, [value])
    return (
        <div>
            <div>Количество рендеров: {renderCount.current}</div>
            <input ref={inputRef} onChange={e => setValue(e.target.value)} value={value}/>
            <button className="btn btn_title" onClick={focus}>Фокус</button>
            <h3>Предыдущее значение: {prevValue.current}</h3>
        </div>
    )
}