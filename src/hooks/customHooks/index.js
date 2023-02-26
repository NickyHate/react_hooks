import React, {useEffect, useState} from "react";

function useLogger(value) {
    useEffect(() => {
    }, [value])
}

function useInput(initialValue) {
    let [value, setValue] = useState(initialValue)
    let onChange = e => {
        setValue(e.target.value)
    }

    let clear = () => setValue('')

    return {
        bind: { value,
                onChange
        },
        value,
        clear
    }
}

export default function TestCustomHooks() {
    let name = useInput('')
    useLogger(name.value)

    return (
        <div>
            <hr/>
            <input type="text" {...name.bind}/>
            <button onClick={() => name.clear()}>Очистить поле имени</button>
            <hr/>
            <h1>{name.value}</h1>
        </div>
    )
}