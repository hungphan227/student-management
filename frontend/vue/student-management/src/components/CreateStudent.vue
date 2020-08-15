<template>
  <f-popup v-on:confirm-popup="confirmStudent" v-on:close-popup="afterClosePopup" v-bind:show="showPopup"  v-bind:after-close-popup="afterClosePopup">
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
    showPopup: false,
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
      }
    }
  },
  watch: {
  },
  methods: {
    confirmStudent () {
      this.$store.dispatch('addStudent', this.student)
    },
    afterClosePopup () {
      this.afterClosePopupCreateStudent()
    }
  }
}
</script>

<style scoped>

</style>
