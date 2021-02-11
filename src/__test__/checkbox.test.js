import React from 'react'
import renderer from 'react-test-renderer'
import Formulario from '../components/Formulario'
import {mount, shallow} from 'enzyme'
import enzymeConfig from '../enzymeConfig'
import {Checkbox,Input} from '@material-ui/core'

describe('<Checkbox/>', ()=>{
 
   
    it('Renderizar Formulario para que se genere Snapshot', ()=>{
        const component = renderer.create(<Formulario />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    

    it('validar que contenga dos webElement checkbox',()=>{
        const component = shallow(<Formulario />);
        expect(component.find(Checkbox).length).toBe(1);
    })
    
     it('validar que contenga solo un webElement label',() => {
        const component = shallow(<Formulario />);
        expect(component.find('label').length).toBe(1);
    });   

     it('validar que el props que reciba el label sea igual a texto ',()=>{
     var texto = "Quiero recibir información";
     const component = shallow(<Formulario textoDeLabel={texto}/>);
     expect(component.find('label').text()).toEqual(texto);     
    });

   it('funcionamiento del onchange en el primer input', ()=>{
       const mockHandler = jest.fn();
       const component = shallow(<Formulario handleChange={mockHandler}/>);
       const input = component.find(Checkbox).at(0);
       input.checked = true;
       input.simulate('change');
       expect(mockHandler.mock.calls.length).toBe(1);   
   });
 
})