import React, {useContext} from "react";
import {AlertContext} from "./index";

export default function Alert() {
    let alert = useContext(AlertContext)

    if (!alert) {
        return null
    }
    return (
        <div className="alert_container">
            Важное сообщение
        </div>
    )
}