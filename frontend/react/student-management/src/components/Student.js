import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux'
import { getStudents, createStudents } from '../store/Actions'
import CreateStudent from './CreateStudent'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/student.css';

class Student extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.loadData()
        //this.state = [{id:1, name:'A', age:12}]
    }

    render() {
        let data = this.createTable();
        return (
            <div>
                <div>
                    <Button onClick={this.popupAddStudent} variant="primary" style={{ marginLeft: "10px" }}>Add Student</Button>
                    <Button onClick={this.back} variant="primary" style={{ float: "right", marginRight: "10px" }}>Back</Button>
                </div>
                <div>
                    <table style={{width: "100%"}}>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>age</th>
                        </tr>
                        {data}
                    </table>
                    <CreateStudent></CreateStudent>
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

    popupAddStudent () {
    }

    back () {
    }
}

const mapStateToProps = (state) => {
    return {
        students: state.students
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getStudents: () => dispatch(getStudents()),
        createStudents: () => dispatch(createStudents())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Student);