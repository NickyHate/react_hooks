import React from "react";
import {useAlert} from "./context";

export default function Main() {
    let {show} = useAlert()
    return (
        <>
            <h1>Пример с контекстом</h1>
            <button onClick={() => show('Изменённый текст при экшене')} className="btn btn_title">Показать алерт</button>
        </>
    )
}
