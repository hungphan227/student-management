<template>
  <div>
    <div>
      <b-button v-on:click="popupAddStudent" style="margin-left: 10px">Add Student</b-button>
      <b-button v-on:click="back" style="float:right; margin-right:10px">Back</b-button>
    </div>
    <div style="text-align: center; margin-top: 10px">
      <b-table :items="this.$store.state.students" :fields="fields" striped responsive="sm">
        <template v-slot:cell(edit)="row">
          <b-button size="sm" class="mr-2" v-on:click="popupEditStudent(row.item)">
            Edit
          </b-button>
        </template>
      </b-table>
      <f-create-student v-bind:show-popup="showPopupCreateStudent" v-bind:after-close-popup-create-student="afterClosePopupCreateStudent"></f-create-student>
      <f-edit-student v-bind:show-popup="showPopupEditStudent" v-bind:selectedStudent="selectedStudent" v-bind:after-close-popup-edit-student="afterClosePopupEditStudent"></f-edit-student>
    </div>
  </div>
</template>

<script>
export default {
  name: 'f-student',
  data () {
    return {
      showPopupCreateStudent: false,
      showPopupEditStudent: false,
      fields: ['id', 'name', 'age', 'edit'],
      selectedStudent: {
        id: 0,
        name: '',
        age: ''
      }
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
    },
    popupEditStudent (student) {
      this.selectedStudent = student
      this.showPopupEditStudent = true
    },
    afterClosePopupEditStudent () {
      this.showPopupEditStudent = false
    },
    back () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
