import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function CustomForm() {
    let sub = ''
    function agarrarInfo(event) {
        console.log(event.target.value)
    }

    function agarrarInfo2(event) {
        console.log(event.target.value)
        sub = event.target.value
    }

    function alertaInfo() {
        alert(sub)
    }

    return (
        <Form onSubmit={alertaInfo}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control  type="email" placeholder="Enter email" onChange={(event) => agarrarInfo2(event)} />
        <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(event) => agarrarInfo(event)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
        Submit
    </Button>
    </Form>
    );
}

export default CustomForm;