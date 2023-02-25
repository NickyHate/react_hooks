import React from "react";
import {useAlert} from "./context";

export default function Alert() {
    let {visible, hide, text} = useAlert()
    if (!visible) {
        return null
    }
    return (
        <div onClick={hide} className="alert_container">
            {text}
        </div>
    )
}