import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux'
import { getStudents } from '../store/Actions'
import CreateStudent from './CreateStudent'
import EditStudent from './EditStudent'
import DeleteStudent from './DeleteStudent'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/student.css';

class Student extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            syncDataWithComponentCreateStudent: {
                syncDataWithComponentPopup: {
                    requestRerender: 0,
                    showPopup: false
                }
            },
            syncDataWithComponentEditStudent: {
                syncDataWithComponentPopup: {
                    requestRerender: 0,
                    showPopup: false
                }
            },
            syncDataWithComponentDeleteStudent: {
                syncDataWithComponentPopup: {
                    requestRerender: 0,
                    showPopup: false
                }
            },
            selectedStudent: {
                id: 0,
                name: '',
                age: ''
            }
        }
        this.loadData()
        //this.state = [{id:1, name:'A', age:12}]
        // this.popupAddStudent = this.popupAddStudent.bind(this)
    }

    render() {
        let data = this.createTable();
        return (
            <div>
                <div>
                    <Button onClick={this.popupAddStudent} variant="secondary" style={{ marginLeft: "10px" }}>Add Student</Button>
                    <Button onClick={this.back} variant="secondary" style={{ float: "right", marginRight: "10px" }}>Back</Button>
                </div>
                <div>
                    <table style={{width: "100%"}}>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>age</th>
                            <th>action</th>
                        </tr>
                        {data}
                    </table>
                    <CreateStudent syncDataOfComponents = {this.state.syncDataWithComponentCreateStudent}></CreateStudent>
                    <EditStudent syncDataOfComponents = {this.state.syncDataWithComponentEditStudent} selectedStudent = {this.state.selectedStudent}></EditStudent>
                    <DeleteStudent syncDataOfComponents = {this.state.syncDataWithComponentDeleteStudent} selectedStudent = {this.state.selectedStudent}></DeleteStudent>
                </div>
            </div>
        )
    }

    createTable() {
        console.log('createTable')
        const {students} = this.props;
        console.log(students)
        let table = []
        if (!students) {
            console.log('Students not found');
            return table
        }
        for (let i=0; i<students.length; i++) {
            let student = students[i]
            table.push (
                <tr>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>
                        <Button onClick={() => {this.popupEditStudent(student)}} variant="secondary">Edit</Button>
                        <Button onClick={() => {this.popupDeleteStudent(student)}} variant="secondary" style={{ marginLeft: "10px" }}>Delete</Button>
                    </td>
                </tr>
            )
        }
        return table;
    }

    componentDidMount() {
        // const {getStudents} = this.props;
        // getStudents()
    }

    loadData() {
        console.log('loadData')
        const {getStudents} = this.props;
        getStudents()

        // fetch("/student", {
        //     method: 'GET'
        // })
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             this.setState((state) => {
        //                 return {students: result}
        //             })
        //         },
        //         (error) => {
        //             console.log(error)
        //         }
        //     )
    }

    popupAddStudent = () => {
        console.log('popupCreateStudent')
        let requestRerender = this.state.syncDataWithComponentCreateStudent.syncDataWithComponentPopup.requestRerender + 1
        this.setState({
            syncDataWithComponentCreateStudent: {
                syncDataWithComponentPopup: {
                    showPopup: true,
                    requestRerender: requestRerender

                }
            }
        })
    }

    popupEditStudent(student) {
        console.log('popupEditStudent')
        this.setState({
            selectedStudent: student,
            syncDataWithComponentEditStudent: {
                syncDataWithComponentPopup: {
                    showPopup: true,
                    requestRerender: this.state.syncDataWithComponentEditStudent.syncDataWithComponentPopup.requestRerender + 1

                }
            }
        })
    }

    popupDeleteStudent(student) {
        console.log('popupDeleteStudent')
        this.setState({
            selectedStudent: student,
            syncDataWithComponentDeleteStudent: {
                syncDataWithComponentPopup: {
                    showPopup: true,
                    requestRerender: this.state.syncDataWithComponentDeleteStudent.syncDataWithComponentPopup.requestRerender + 1

                }
            }
        })
    }

    back = () => {
        this.props.history.push('/')
    }
}

const mapStateToProps = (state) => {
    return {
        students: state.students
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getStudents: () => dispatch(getStudents())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Student);