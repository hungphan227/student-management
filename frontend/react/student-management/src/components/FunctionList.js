import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/student.css';

class FunctionList extends React.Component {

    constructor(props) {
        console.log('construct FunctionList')
        super(props)
    }

    render() {
        return (
            <div>
                <div class="student-mngm-btn">
                    <Button block variant="primary" onClick={this.accessInnerPage}>Student</Button>
                </div>
                <div class="student-mngm-btn">
                    <Button block variant="primary" onClick={this.accessInnerPage}>Class</Button>
                </div>
            </div>
        );
    }

    accessInnerPage = () => {
        this.props.history.push('/student')
    }
}

export default FunctionList;