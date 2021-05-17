import React from 'react';
import {shallow} from 'enzyme'
import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en PrimeraApp', () => {
    // test('debe mostrar un mensaje Hola...', () => {
    //     const saludo = 'Hola, soy goku';
    //     const {getByText} = render(<PrimeraApp saludo={saludo}/>);
    //     expect(getByText(saludo)).toBeInTheDocument;
    // })

    test('Debe mostrar PrimeraApp', () => {
        const saludo = 'Hola, soy goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>)

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar subtitulo enviado por props', () => {
        const saludo = 'Hola, soy goku';
        const subtitulo = 'Soy un subtitulo';
        const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo}/>);

        const textoParrafo = wrapper.find('p').text();
        
        expect(textoParrafo).toBe(subtitulo);
    })
    
    
})
