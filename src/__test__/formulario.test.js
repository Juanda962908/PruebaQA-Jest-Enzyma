import React from 'react'
import renderer from 'react-test-renderer'
import Formulario from '../components/Formulario'
import {Button} from '@material-ui/core'
import {InputLabel} from '@material-ui/core'
import {mount, shallow} from 'enzyme'
import enzymeConfig from '../enzymeConfig'


/* Este debe ser para el submit y un alert */

describe('<Formulario/>', ()=>{
 
    it('validar que se renderice el checkbox', ()=>{
        const component = renderer.create(<Formulario />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
       
    it('validar que contenga elemento Button',() => {
        const component = shallow(<Formulario />);
        expect(component.find(Button).length).toBe(1);
    });   

})