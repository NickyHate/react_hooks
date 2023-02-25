import React, {useState, useContext} from "react";

let AlertContext = React.createContext()

export let useAlert = () => {
    return useContext(AlertContext)
}

export let AlertProvider = ({ children }) => {
    let [alert, setAlert] = useState(false)
    let toggle = () => setAlert( prev => !prev)

    return (
        <AlertContext.Provider value={{
            visible: alert,
            toggle: toggle
        }}>
            { children }
        </AlertContext.Provider>
    )
}