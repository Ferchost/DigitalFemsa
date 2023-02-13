import React from 'react';
const { default: SectionLabel } = require("../components/SectionLabel");
import renderer from 'react-test-renderer';

let component;
test("Renderiza bien",()=>{
        component = renderer.create(<SectionLabel text={"Hola Test"} UpperCase={false} />).toJSON()
        expect(component).toMatchSnapshot();
  
})