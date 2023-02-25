import React from "react";

export default function Main({ toggle }) {
    return (
        <>
            <h1>Пример с контекстом</h1>
            <button onClick={toggle} className="btn btn_title">Показать алерт</button>
        </>
    )
}
