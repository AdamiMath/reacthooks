import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import DataContext from '../../data/datacontext'
import SectionTitle from '../../components/layout/SectionTitle';
import { AppContext } from '../../data/store';

const UseContext = (props) => {

    const {state, setState} = useContext(DataContext);

    function incluNumber(n){
        setState({
            ...state,
            number: state.number + n
        })
    }

    const {number, setNumber} = useContext(AppContext)

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle title="Exercicio 01" />
            <div className="center">
                <span className="text">{state.text}</span>
                <span className="text">{state.number}</span>

            </div>

            <div className="center">
                <button onClick={() => incluNumber(+1)} className="btn">+1</button>
                 <button onClick={() => incluNumber(-1)} className="btn">-1</button>


            </div>
            <SectionTitle title="Exercicio 02" />
            <div className="center">
                <span className="text">{number}</span>
                <div>
                    <button onClick={() => setNumber(number - 1)} className="btn">-1</button>
                    <button onClick={() => setNumber(number + 1)} className="btn">+1</button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
