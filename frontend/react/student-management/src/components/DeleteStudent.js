import React from 'react'
import { connect } from 'react-redux'
import Popup from './Popup'
import {deleteStudent} from "../store/Actions"

class DeleteStudent extends React.Component {

    constructor(props) {
        console.log('construct DeleteStudent')
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
        console.log('render DeleteStudent')
        return (
            <Popup syncDataOfComponents = {this.props.syncDataOfComponents.syncDataWithComponentPopup} handleConfirm = {this.confirmStudent} headerProp = {"Delete Student " + this.props.selectedStudent.id}>
                <h2 style= {{ textAlign: "center" }}>Are you sure?</h2>
            </Popup>
        )
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('DeleteStudent componentWillUpdate')
        if (nextProps.selectedStudent != this.props.selectedStudent) {
            this.state.student = nextProps.selectedStudent
        }
    }

    confirmStudent = () => {
        console.log('DeleteStudent confirmStudent')
        console.log(this.state.student)
        const {deleteStudent} = this.props;
        deleteStudent(this.state.student)
    }

}

const mapStateToProps = (state) => {
    return {
        students: state.students
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteStudent: (student) => dispatch(deleteStudent(student))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteStudent)