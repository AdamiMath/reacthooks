import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useRef } from 'react';
import { useEffect } from 'react';

const nomes = [];

const merge = (s1, s2) => {
    let result = '';
    for (let i = 0; i < Math.max(s1.length, s2.length); i++) {
        if (i < s1.length) result += s1[i];
        if (i < s2.length) result += s2[i];
    }
    return result;
};


const UseRef = (props) => {
    const [value1, setvalue1] = useState('');
    const [value2, setvalue2] = useState('');

    const count = useRef(0);
    const myInput = useRef(null);
    const myInput2 = useRef(null);


    useEffect(() => {
        count.current = count.current + 1; 
        myInput2.current.focus()
    }, [value1]);
    useEffect(() => {
        count.current = count.current + 1; 
         myInput.current.focus()
        }, [value2]);

    


    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                <span className="text">Valor: </span>
                <span className="text">{merge(value1, value2)}[</span>
                <span className="text red">{count.current}</span>
                <span className="text">]</span>
                </div>

                <input ref={myInput} type="text" className="input" value={value1} onChange={e => setvalue1(e.target.value)}/>    
            </div>    
            <SectionTitle title="Exercício #02" />
            <div className='center'>
                
               <input ref={myInput2} type="text" className="input" value={value2} onChange={e => setvalue2(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseRef
