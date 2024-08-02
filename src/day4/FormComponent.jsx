import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

function FormComponent({changeHandler, addHandle}) {
   return (
      <div>
         <InputGroup className="mb-3">
         <InputGroup.Text id="basic-addon1">name</InputGroup.Text>
         <Form.Control onChange={changeHandler} name='name'/>
         </InputGroup>
         <InputGroup className="mb-3">
         <InputGroup.Text id="basic-addon1">phone</InputGroup.Text>
         <Form.Control onChange={changeHandler} name='phone'/>
         </InputGroup>
         <InputGroup className="mb-3">
         <InputGroup.Text id="basic-addon1">active</InputGroup.Text>
         <Form.Control onChange={changeHandler} name='active'/>
         </InputGroup>
         <Button onClick={addHandle}>ADD</Button>
      </div>
   );
}

export default FormComponent;