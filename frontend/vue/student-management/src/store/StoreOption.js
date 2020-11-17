import { apiService } from "../service";

const storeOptions = {
  state: {
    students: []
  },
  mutations: {
    setStudents (state, students) {
      state.students = students
    },
    addStudent (state, student) {
      state.students.push(student)
    },
    editStudent (state, student) {
      let index = state.students.findIndex(function findById(curStudent) {
        return student.id === curStudent.id
      })
      state.students.splice(index, 1, student)
    },
    deleteStudent (state, studentId) {
      let index = state.students.findIndex(function findById(curStudent) {
        return studentId === curStudent.id
      })
      state.students.splice(index, 1)
    }
  },
  actions: {
    getAllStudents (state) {
      apiService.getAllStudents(
        (success) => {
          if (success.status === 200) {
            let data = success.body
            state.commit('setStudents', data)
          }
        },
        (error) => {
          console.log(error)
        }
      )
    },
    addStudent (state, student) {
      apiService.createStudent(student,
        (success) => {
          if(success.status === 201) {
            let createdStudent = success.body
            state.commit('addStudent' , createdStudent)
          }
        },
        (error) => {
          console.log(error)
        })
    },
    editStudent (state, student) {
      apiService.editStudent(student,
        (success) => {
          if(success.status === 200) {
            let editedStudent = success.body
            state.commit('editStudent' , editedStudent)
          }
        },
        (error) => {
          console.log(error)
        })
    },
    deleteStudent (state, studentId) {
      apiService.deleteStudent(studentId,
        (success) => {
          if(success.status === 200) {
            state.commit('deleteStudent' , studentId)
          }
        },
        (error) => {
          console.log(error)
        })
    }
  }
}

export { storeOptions }
