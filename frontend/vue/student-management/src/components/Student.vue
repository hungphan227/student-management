<template>
  <div>
    <div>
      <b-button v-on:click="popupAddStudent" style="margin-left: 10px">Add Student</b-button>
      <b-button v-on:click="back" style="float:right; margin-right:10px">Back</b-button>
    </div>
    <div style="text-align: center; margin-top: 10px">
      <b-table :items="this.$store.state.students" :fields="fields" striped responsive="sm">
        <template v-slot:cell(action)="row">
          <b-button size="sm" class="mr-2" v-on:click="popupEditStudent(row.item)">
            Edit
          </b-button>
          <b-button size="sm" class="mr-2" v-on:click="popupDeleteStudent(row.item)">
            Delete
          </b-button>
        </template>
      </b-table>
      <f-create-student v-bind:sync-data-of-components="syncDataWithComponentCreateStudent" v-bind:after-close-popup-create-student="afterClosePopupCreateStudent"></f-create-student>
      <f-edit-student v-bind:sync-data-of-components="syncDataWithComponentEditStudent" v-bind:selectedStudent="selectedStudent" v-bind:after-close-popup-edit-student="afterClosePopupEditStudent"></f-edit-student>
      <f-delete-student v-bind:sync-data-of-components="syncDataWithComponentDeleteStudent" v-bind:selectedStudent="selectedStudent"></f-delete-student>
    </div>
  </div>
</template>

<script>
export default {
  name: 'f-student',
  data () {
    return {
      syncDataWithComponentCreateStudent: {
        syncDataWithComponentPopup: {
          requestRerender: 0,
          showPopup: false
        }
      },
      syncDataWithComponentEditStudent: {
        syncDataWithComponentPopup: {
          requestRerender: 0,
          showPopup: false
        }
      },
      syncDataWithComponentDeleteStudent: {
        syncDataWithComponentPopup: {
          requestRerender: 0,
          showPopup: false
        }
      },
      fields: ['id', 'name', 'age', 'action'],
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
      this.syncDataWithComponentCreateStudent.syncDataWithComponentPopup.showPopup = true
      this.syncDataWithComponentCreateStudent.syncDataWithComponentPopup.requestRerender++
    },
    afterClosePopupCreateStudent () {
    },
    popupEditStudent (student) {
      this.syncDataWithComponentEditStudent.syncDataWithComponentPopup.showPopup = true
      this.syncDataWithComponentEditStudent.syncDataWithComponentPopup.requestRerender++
      this.selectedStudent = student
    },
    popupDeleteStudent (student) {
      this.syncDataWithComponentDeleteStudent.syncDataWithComponentPopup.showPopup = true
      this.syncDataWithComponentDeleteStudent.syncDataWithComponentPopup.requestRerender++
      this.selectedStudent = student
    },
    afterClosePopupEditStudent () {
    },
    back () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
