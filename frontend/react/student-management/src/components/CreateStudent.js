import React from 'react';
import { connect } from 'react-redux'
import { Form } from 'react-bootstrap'
import Popup from './Popup'

class CreateStudent extends React.Component {

    render() {
        return (
            <Popup headerProp = "Create Student">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Age:</Form.Label>
                    <Form.Control type="number" placeholder="Enter age" />
                </Form.Group>
            </Popup>
        )
    }

    confirmStudent () {

    }

}

export default CreateStudent