import React, {useEffect, useState} from "react";

export default function ItemsList({ getItems }) {
    let [items, setItems] = useState([])
    useEffect(() => {
        let newItems = getItems()
        setItems(newItems)
    }, [getItems])
    return (
        <ul>
            { items.map(i => <li key={i}>{i}</li>) }
        </ul>
    )
}