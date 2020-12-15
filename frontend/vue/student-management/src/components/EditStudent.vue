<template>
  <f-popup v-on:confirm-popup="confirmStudent" v-on:open-popup="afterOpenPopup" v-bind:sync-data-of-components="syncDataOfComponents.syncDataWithComponentPopup">
    <div slot="header">
      <h5>Edit student {{student.id}}</h5>
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
    syncDataOfComponents: {
      syncDataWithComponentPopup: {}
    },
    selectedStudent: {
      type: Object,
      required: true
    },
    afterClosePopupEditStudent: {
      type: Function,
      required: true
    }
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
      this.student = Object.assign(this.student, this.selectedStudent)
    },
    confirmStudent () {
      this.$store.dispatch('editStudent', this.student)
    }
  }
}
</script>

<style scoped>

</style>
