import React from "react";
import {useAlert} from "./context";

export default function Alert() {
    let {visible} = useAlert()
    if (!visible) {
        return null
    }
    return (
        <div className="alert_container">
            Важное сообщение
        </div>
    )
}