import React from "react";
import {AlertProvider} from "./context";
import Main from "./main";
import Alert from "./alert";
import "./style.css"

export default function TestUseContext() {

    return (
        <AlertProvider>
            <div>
                <Alert/>
                <Main/>
            </div>
        </AlertProvider>
    )
}