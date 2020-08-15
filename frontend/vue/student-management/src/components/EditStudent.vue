<template>
  <f-popup v-on:confirm-popup="confirmStudent" v-on:open-popup="afterOpenPopup" v-on:close-popup="afterClosePopup" v-bind:show="showPopup" v-bind:after-close-popup="afterClosePopup">
    <div slot="header">
      <h5>Edit Student {{student.id}}</h5>
    </div>
    <div slot="body">
      <b-form-group id="edit-group-1" label="Name:" label-for="edit-1">
        <b-form-input id="edit-1" v-model="student.name" type="text" required placeholder="Enter name"></b-form-input>
      </b-form-group>
      <b-form-group id="edit-group-2" label="Age:" label-for="edit-2">
        <b-form-input id="edit-2" v-model="student.age" type="text" required placeholder="Enter age"></b-form-input>
      </b-form-group>
    </div>
  </f-popup>
</template>

<script>
export default {
  name: "f-edit-student",
  props: {
    showPopup: false,
    selectedStudent: {
      type: Object,
      required: true
    },
    afterClosePopupEditStudent: {
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
      }
    }
  },
  mounted() {
  },
  watch: {
  },
  methods: {
    afterOpenPopup () {
      this.student.id = this.selectedStudent.id
      this.student.name = this.selectedStudent.name
      this.student.age = this.selectedStudent.age
    },
    confirmStudent () {
      this.$store.dispatch('editStudent', this.student)
    },
    afterClosePopup () {
      this.afterClosePopupEditStudent()
    }
  }
}
</script>

<style scoped>

</style>
