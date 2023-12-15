import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useCounter } from '../../hooks/useCounter'
import { useFecth } from '../../hooks/useFetch'

const UseRef = (props) => {

    const [count, inc, dec] = useCounter();
    const url = 'http://files.cod3r.com.br/curso-react/estdos.json'
    const state = useFecth(url);

    function showStates(states){
        return states.map(state => <li>{state.nome} - {state.sigla}</li>)
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
            <SectionTitle title="exercicios 01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={() => dec ()}>-1</button>
                    <button className="btn" onClick={() => inc ()}>+1</button>

                </div>
                <SectionTitle title="exercicios 02" />
                <div className="center">
                    <ul>
                        {state.data ? showStates(state.data) : false}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UseRef
