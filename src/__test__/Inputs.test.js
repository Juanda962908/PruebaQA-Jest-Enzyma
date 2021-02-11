
import React from 'react'
import renderer from 'react-test-renderer'
import Formulario from '../components/Formulario'
import {shallow} from 'enzyme'
import enzymeConfig from '../enzymeConfig'
import {Input} from '@material-ui/core'

describe('<Checkbox/>', ()=>{
 
   
    it('Renderizar Formulario para que se genere Snapshot', ()=>{
        const component = renderer.create(<Formulario />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });    

 
    
     it('validar que contenga dos webElement Input',() => {
        const component = shallow(<Formulario />);
        expect(component.find(Input).length).toBe(2);
    });   

    

     it('funcionamiento del Onchange en el webElement Input1', ()=>{
         const mockHandler = jest.fn();
         const component = shallow(<Formulario handleChange={mockHandler}/>);
         const input = component.find(Input).at(0);
         input.checked = true;
         input.simulate('change');
         expect(mockHandler.mock.calls.length).toBe(1);   
     }); 
        it('funcionamiento del Onchange en el webElement Input2', ()=>{
         const mockHandler = jest.fn();
         const component = shallow(<Formulario handleChange={mockHandler}/>);
         const input = component.find(Input).at(1);
         input.checked = true;
         input.simulate('change');
         expect(mockHandler.mock.calls.length).toBe(1);   
        });
 
})