import {GET_STUDENTS, CREATE_STUDENT} from "./Actions";

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
            const { text } = action
            const newTodo = {
                text,
                isCompleted: false
            }
            return state.concat(newTodo)
        }
        default:
            return state
    }
}