export const GET_STUDENTS = 'GET_STUDENTS'
export const CREATE_STUDENT = 'CREATE_STUDENT'
export const EDIT_STUDENT = 'EDIT_STUDENT'
export const DELETE_STUDENT = 'DELETE_STUDENT'

export function getStudents () {
    return function(dispatch) {
        return fetch("/student", {
            method: 'GET'
        })
            .then(res => res.json())
            .then(
                (result) => {
                    dispatch({
                        type: GET_STUDENTS,
                        students: result
                    });
                },
                (error) => {
                    console.log(error)
                }
            )
    }
}

export function createStudents (student) {
    return function(dispatch) {
        console.log('action create student')
        console.log(student)
        return fetch("/student", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        })
            .then(res => res.json())
            .then(
                (result) => {
                    dispatch({
                        type: CREATE_STUDENT,
                        student: result
                    });
                },
                (error) => {
                    console.log(error)
                }
            )
    }
}

export function editStudent (student) {
    return function(dispatch) {
        console.log('action edit student')
        console.log(student)
        return fetch("/student/"+student.id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        })
            .then(res => res.json())
            .then(
                (result) => {
                    dispatch({
                        type: EDIT_STUDENT,
                        student: result
                    });
                },
                (error) => {
                    console.log(error)
                }
            )
    }
}

export function deleteStudent (student) {
    return function(dispatch) {
        console.log('action delete student')
        console.log(student.id)
        return fetch("/student/"+student.id, {
            method: 'DELETE'
        })
            .then(res => res.text())
            .then(
                (result) => {
                    dispatch({
                        type: DELETE_STUDENT,
                        studentId: student.id
                    });
                },
                (error) => {
                    console.log(error)
                }
            )
    }
}
