<template>
  <f-popup v-bind:sync-data-of-components="syncDataOfComponents">
    <div slot="header">
      <h5>Test</h5>
    </div>
    <div slot="body">
      <b-form-group id="test-group-1" label="Name:" label-for="test-1">
        <b-form-input id="input-1" v-model="student.name" type="text" required placeholder="Enter name"></b-form-input>
      </b-form-group>
      <b-form-group id="test-group-2" label="Age:" label-for="test-2">
        <b-form-input id="input-2" v-model="student.age" type="text" required placeholder="Enter age"></b-form-input>
      </b-form-group>
    </div>
    <div slot="footer">
      <b-button size="sm" variant="success" v-on:click="doSomething">
        OK
      </b-button>
      <b-button size="sm" variant="danger" v-on:click="doSomething">
        Cancel
      </b-button>
    </div>
  </f-popup>
</template>

<script>
export default {
  name: "f-test",
  props: {
    afterClosePopupCreateStudent: {
      type: Function,
      required: false
    }
  },
  data () {
    return {
      syncDataOfComponents: {
        showPopup: false
      },
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
  mounted() {
    this.syncDataOfComponents.showPopup = true
  },
  watch: {
    'student.name': function (val) {
      console.log('CCCCCCCCCCCCCCCC')
    }
  },
  methods: {
    doSomething () {
      this.student.name = 'asdsad'
    }
  }
}
</script>

<style scoped>

</style>
