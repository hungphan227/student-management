import React from 'react';
import { connect } from 'react-redux'
import { Form } from 'react-bootstrap'
import Popup from './Popup'
import {createStudents} from "../store/Actions";

class CreateStudent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            student: {
                id: 0,
                name: '',
                age: ''
            }
        }
    }

    render() {
        console.log('render CreateStudent')
        return (
            <Popup syncDataOfComponents = {this.props.syncDataOfComponents.syncDataWithComponentPopup} handleConfirm = {this.confirmStudent} headerProp = "Create Student">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" onChange={(event) => {this.state.student.name = event.target.value}}/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Age:</Form.Label>
                    <Form.Control type="number" placeholder="Enter age" onChange={(event) => {this.state.student.age = event.target.value}}/>
                </Form.Group>
            </Popup>
        )
    }

    confirmStudent = () => {
        console.log('CreateStudent confirmStudent')
        console.log(this.state.student)
        const {createStudents} = this.props;
        createStudents(this.state.student)
    }

}

const mapStateToProps = (state) => {
    return {
        students: state.students
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createStudents: (student) => dispatch(createStudents(student))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateStudent)