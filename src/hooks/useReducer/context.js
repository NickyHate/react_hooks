import React, {useContext, useReducer} from "react";

let AlertContext = React.createContext()

export let useAlert = () => {
    return useContext(AlertContext)
}

const SHOW_ALERT = 'show'
const HIDE_ALERT = 'hide'

let reducer = (state, action) => {
    switch (action.type) {
        case SHOW_ALERT: return { ...state, visible: true, text: action.text }
        case  HIDE_ALERT: return { ...state, visible: false }
        default: return state
    }
}

export let AlertProvider = ({ children }) => {
    let [state, dispatch] = useReducer(reducer, {
        visible: false
    })

    let show = text => dispatch({ type: SHOW_ALERT, text})
    let hide = () => dispatch({ type: HIDE_ALERT })

    return (
        <AlertContext.Provider value={{
            visible: state.visible,
            text: state.text,
            show,
            hide
        }}>
            { children }
        </AlertContext.Provider>
    )
}