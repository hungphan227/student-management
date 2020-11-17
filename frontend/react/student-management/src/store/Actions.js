export const GET_STUDENTS = 'GET_STUDENTS'
export const CREATE_STUDENT = 'CREATE_STUDENT'

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

export const createStudents = text => ({
    type: CREATE_STUDENT,
    payload: text
})
