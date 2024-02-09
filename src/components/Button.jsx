import { useState } from "react"

export const Button = ({ filterNumBicis }) => {

    const [name, setName] = useState('');

    function inputValue() {
        setName(event.target.value)
    }
    return (
        <div>
            <input type="text" value={name} className="border-2 border-solid"
                onChange={inputValue} />
            <button onClick={() => filterNumBicis(name)}>Cargar Datos</button>
        </div>
    )
}

export default Button
