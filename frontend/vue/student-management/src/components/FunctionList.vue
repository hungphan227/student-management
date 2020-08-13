<template>
  <div>
    <div class="student-mngm-btn">
      <b-button block variant="primary" v-on:click = "accessInnerPage">Student</b-button>
    </div>
    <div class="student-mngm-btn">
      <b-button block variant="primary" v-on:click = "accessInnerPage">Class</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "f-function-list",
  methods: {
    accessInnerPage () {
      console.log('goto')
      this.$router.push('student')
    }
  }
}
</script>

<style scoped>
  .student-mngm-btn {
    margin-bottom: 10px;
  }
</style>
