<template>
  <div>
    <b-button v-on:click="popupAddStudent">Add Student</b-button>
    <b-table striped hover :items="this.$store.state.students"></b-table>
    <f-create-student v-bind:show-popup="showPopupCreateStudent" v-bind:after-close-popup-create-student="afterClosePopupCreateStudent"></f-create-student>
  </div>
</template>

<script>
export default {
  name: 'f-student',
  data () {
    return {
      showPopupCreateStudent: false
    }
  },
  created () {
    this.$store.dispatch('getAllStudents', this.student)
  },
  mounted () {
  },
  methods: {
    popupAddStudent () {
      this.showPopupCreateStudent = true
    },
    afterClosePopupCreateStudent () {
      this.showPopupCreateStudent = false
    }
  }
}
</script>

<style scoped>

</style>
