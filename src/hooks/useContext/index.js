import React, {useState} from "react";
import Main from "./main";
import Alert from "./alert";
import "./style.css"

export let AlertContext = React.createContext()

export default function TestUseContext() {
    let [alert, setAlert] = useState(false)

    let toggleAlert = () => setAlert( prev => !prev)

    return (
        <AlertContext.Provider value={alert}>
            <div>
                <Alert/>
                <Main toggle={toggleAlert}/>
            </div>
        </AlertContext.Provider>
    )
}