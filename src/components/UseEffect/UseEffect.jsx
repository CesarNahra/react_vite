import { useState, useEffect } from 'react';

const fruitsArr = ['Maçã', 'Banana', 'Morango', 'Tomate'];

const UseEffect = () => {
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        const ulElement = document.querySelector('#list');
        ulElement.innerHTML = render();
    }, [fruits])

    const render = () => {
        return(
            <>
                <li>{fruits[0]}</li>
                <li>{fruits[1]}</li>
                <li>{fruits[2]}</li>
                <li>{fruits[3]}</li>
            </>
        );
    }

    const getFruits = () => {
        setFruits(fruitsArr);
    }

    return(
        <>
            <ul id="list"></ul>
            <button onClick={getFruits}>Buscar Frutas</button>
        </>
    );
};

export default UseEffect;