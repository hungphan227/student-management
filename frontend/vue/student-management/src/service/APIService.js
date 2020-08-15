import Vue from 'vue'

let getCallback = function (callback) {
  return function (data) {
    if (callback && typeof callback === 'function') {
      callback(data)
    } else {
      console.error('Call back is not a function')
    }
  }
}

export default class {
  getAllStudents (onSuccess, onError) {
    return Vue.http.get('/students').then(onSuccess, onError)
  }
  createStudent (student, onSuccess, onError) {
    return Vue.http.post('/student', student).then(onSuccess, onError)
  }
  editStudent (student, onSuccess, onError) {
    return Vue.http.put('/student/'+student.id, student).then(onSuccess, onError)
  }
}
