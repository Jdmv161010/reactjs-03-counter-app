import { shallow } from "enzyme"
import React from 'react'

import CounterApp from "../CounterApp";

describe('Pruebas al componente CounterApp', () => {

    let wrapper = shallow(<CounterApp/>);

    beforeEach( () => {
        wrapper = shallow(<CounterApp/>);
    });

    test('Evaluacion CounterApp component con snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Evaluacion CounterApp component valor por defecto', () => {
        const wrapper = shallow(<CounterApp value={100}/>);
        const textoDefecto = wrapper.find('h2').text().trim();

        expect(textoDefecto).toBe('100');
    });

    test('debe incrementar con el boton +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const CounterText = wrapper.find('h2').text().trim();
        expect(CounterText).toBe('11');
    });

    test('debe disminuir con el boton -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const CounterText = wrapper.find('h2').text().trim();
        expect(CounterText).toBe('9');
    });

    test('prueba boton reset value', () => {
        const wrapper = shallow(<CounterApp value={100}/>);
        wrapper.find('button').at(1).simulate('click');
        const CounterText = wrapper.find('h2').text().trim();
        
        expect(CounterText).toBe('100');
    });
    
});
