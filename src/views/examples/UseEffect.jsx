import React, { useState, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';


function factory(n){
    if(n < 0) return -1
    if(n < 1) return 1
    return n * factory(n - 1);
}

function parOuimpar(n){
    return n % 2 === 0 ? 'Par' : 'Impar'
}



const UseEffect = (props) => {
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);
    const [parouimpar, setParouImpar] = useState('');

    useEffect( () => {
        setParouImpar(parOuimpar(number))
    },[number]);

    useEffect( () => {
        setFatorial(factory(number))
    },[number]);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercicio 01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red"> {fatorial < 0 ? 'Não existe Fatorial' : fatorial}</span>
                </div>
            <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)}/>
            </div>
            <SectionTitle title="Exercicio 01" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red"> {parouimpar}</span>
                </div>
            </div>
       </div>
    )
}

export default UseEffect
