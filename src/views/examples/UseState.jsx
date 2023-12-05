import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {
    const [count, setCount] = useState(0);
    const [name, SetName] = useState('');


    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Exercico #01 - Contador"/>
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={() => setCount(count - 1)}>- 1</button>
                    <button className="btn" onClick={() => setCount(count + 1)}>+ 1</button>
                </div>
            </div>
            <SectionTitle title="Exercico #02 - Componente Controlado"/>
            <input type="text" className="input" value={name} onChange={e => SetName(e.target.value)} />
            


        </div>
    )
}

export default UseState
