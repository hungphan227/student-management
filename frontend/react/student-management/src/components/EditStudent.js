import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'react-bootstrap'
import Popup from './Popup'
import {editStudent} from "../store/Actions"

class EditStudent extends React.Component {

    constructor(props) {
        console.log('construct EditStudent')
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
        console.log('render EditStudent')
        return (
            <Popup syncDataOfComponents = {this.props.syncDataOfComponents.syncDataWithComponentPopup} handleConfirm = {this.confirmStudent} headerProp = "Edit Student">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={this.state.student.name} onChange={(event) => this.changeDisplayedData(event, 'name')}/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Age:</Form.Label>
                    <Form.Control type="number" placeholder="Enter age" value={this.state.student.age} onChange={(event) => this.changeDisplayedData(event, 'age')}/>
                </Form.Group>
            </Popup>
        )
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('EditStudent componentWillUpdate')
        if (nextProps.selectedStudent != this.props.selectedStudent) {
            this.state.student = nextProps.selectedStudent
        }
    }

    changeDisplayedData(event, type) {
        const newStudent = {...this.state.student};
        newStudent[type] = event.target.value;
        this.setState({student: newStudent});
    }

    confirmStudent = () => {
        console.log('EditStudent confirmStudent')
        console.log(this.state.student)
        const {editStudent} = this.props;
        editStudent(this.state.student)
    }

}

const mapStateToProps = (state) => {
    return {
        students: state.students
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editStudent: (student) => dispatch(editStudent(student))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent)