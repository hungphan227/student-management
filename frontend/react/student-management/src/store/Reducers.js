import {GET_STUDENTS, CREATE_STUDENT, EDIT_STUDENT, DELETE_STUDENT} from "./Actions";

export const studentReducer = (state = [], action) => {
    console.log('reducers')
    const { type } = action
    switch (type) {
        case GET_STUDENTS: {
            const { students } = action
            console.log(students)
            state = students
            return state
        }
        case CREATE_STUDENT: {
            const { student } = action
            return [...state, student]
        }
        case EDIT_STUDENT: {
            const { student } = action
            let index = state.findIndex(function findById(curStudent) {
                return student.id === curStudent.id
            })
            state.splice(index, 1, student)
            return [...state]
        }
        case DELETE_STUDENT: {
            const { studentId } = action
            let index = state.findIndex(function findById(curStudent) {
                return studentId === curStudent.id
            })
            state.splice(index, 1)
            return [...state]
        }
        default:
            return state
    }
}