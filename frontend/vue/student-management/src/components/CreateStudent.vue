<template>
  <f-popup v-on:confirm-popup="confirmStudent" v-bind:sync-data-of-components="syncDataOfComponents.syncDataWithComponentPopup">
    <div slot="header">
      <h5>Create Student</h5>
    </div>
    <div slot="body">
      <b-form-group id="input-group-1" label="Name:" label-for="input-1">
        <b-form-input id="input-1" v-model="student.name" type="text" required placeholder="Enter name"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Age:" label-for="input-2">
        <b-form-input id="input-2" v-model="student.age" type="text" required placeholder="Enter age"></b-form-input>
      </b-form-group>
    </div>
  </f-popup>
</template>

<script>
export default {
  name: "f-create-student",
  props: {
    syncDataOfComponents: {
      syncDataWithComponentPopup: {}
    },
    afterClosePopupCreateStudent: {
      type: Function,
      required: true
    },
  },
  data () {
    return {
      student: {
        id: 0,
        name: '',
        age: ''
      },
      emptyStudent: {
        id: 0,
        name: '',
        age: ''
      }
    }
  },
  watch: {
  },
  methods: {
    confirmStudent () {
      this.$store.dispatch('addStudent', this.student)
      //this.$store.state.students.push(this.student);
      this.student = Object.assign(this.student, this.emptyStudent)
    }
  }
}
</script>

<style scoped>

</style>
