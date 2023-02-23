import React, {useState, useEffect} from "react";
import "./style.css";

export default function TestUseEffect() {
    let [type, setType] = useState('users')
    let [data, setData] = useState([])
    let [pos, setPos] = useState({
        x: 0,
        y: 0
    })

    let mouseMoveHandler = (e) => {
        setPos({
            x: e.clientX,
            y: e.clientY
        })
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [type])

    useEffect(() => {
        window.addEventListener('mousemove', mouseMoveHandler)
        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler)
        }
    }, [])

    return (
        <div>
            <h1>Ресурс: {type}</h1>
            <button onClick={() => {setType('users')}}>Пользователи</button>
            <button onClick={() => {setType('todos')}}>Todo</button>
            <button onClick={() => {setType('posts')}}>Посты</button>
            <pre className="pre_formatter">{JSON.stringify(data, null, 2)}</pre>
            <pre className="pre_formatter">{JSON.stringify(pos, null, 2)}</pre>
        </div>
    )
}