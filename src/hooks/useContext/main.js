import React from "react";
import {useAlert} from "./context";

export default function Main() {
    let {toggle} = useAlert()
    return (
        <>
            <h1>Пример с контекстом</h1>
            <button onClick={toggle} className="btn btn_title">Показать алерт</button>
        </>
    )
}
