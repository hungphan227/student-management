<template>
  <f-popup v-on:confirm-popup="confirmStudent" v-on:open-popup="afterOpenPopup" v-bind:sync-data-of-components="syncDataOfComponents">
    <div slot="header" >
      <h5>Delete student {{selectedStudent.id}}</h5>
    </div>
    <div slot="body">
      <h2 style="text-align: center">Are you sure?</h2>
    </div>
  </f-popup>
</template>

<script>
export default {
  name: "f-delete-student",
  props: {
    syncDataOfComponents: {
      showPopup: false
    },
    selectedStudent: {
      type: Object,
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
      this.student.id = this.selectedStudent.id
    },
    confirmStudent () {
      this.$store.dispatch('deleteStudent', this.selectedStudent.id)
    }
  }
}
</script>

<style scoped>

</style>
