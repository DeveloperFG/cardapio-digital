import { createContext, useState } from "react";

export const ItemContext = createContext([]);

function ItemProvider({ children }) {

    const [lista, setLista] = useState([])
    const [topico, setTopico] = useState('')
    const [total, setTotal] = useState('')

    return (
        <ItemContext.Provider value={{ lista, setLista, topico, setTopico, total, setTotal }}>
            {children}
        </ItemContext.Provider>
    )
}

export default ItemProvider;