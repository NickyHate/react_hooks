import React, {useState, useCallback} from "react";
import ItemsList from "./itemsList";

export default function TestUseCallback(){
    let [colored, setColored] = useState(false)
    let [count, setCount] = useState(1)
    let styles = {
        color: colored ? "lightgray" : "black"
    }
    // Кэшируем значение и вызываем эту функцию только в случае изменения count
    // Отличие от useMemo в том, что результатом будет функция, а в useMemo результатом будет то, что вернет функция
    let generateItemsFromAPI = useCallback(() => {
        return new Array(count).fill('').map((_,i) => `Элемент ${i + 1}`)
    }, [count])

    return (
        <div>
            <h1 style={styles}>Количество элементов: {count}</h1>
            <button onClick={() => setCount(prev => prev + 1) } className="btn btn_inc">Добавить</button>
            <button onClick={() => setColored(prev => !prev) } className="btn btn_title">Изменить цвет</button>
            <ItemsList getItems={generateItemsFromAPI}/>
        </div>
    )
}