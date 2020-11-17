<template>
  <div>
    <b-modal ref="my-modal" v-on:hide="afterHidePopup">
      <template v-slot:modal-header="{}">
        <slot name="header">
        </slot>
      </template>

      <template v-slot:default="{}">
        <slot name="body">
        </slot>
      </template>

      <template v-slot:modal-footer="{}">
        <slot name="footer">
          <b-button size="sm" variant="success" v-on:click="confirm">
            OK
          </b-button>
          <b-button size="sm" variant="danger" v-on:click="closePopup">
            Cancel
          </b-button>
        </slot>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'f-popup',
  props: {
    syncDataOfComponents: {
      showPopup: false
    }
  },
  watch: {
    'syncDataOfComponents.showPopup': function (val) {
      if (val) {
        this.$refs['my-modal'].show()
        this.$emit('open-popup')
      } else {
        this.$refs['my-modal'].hide()
      }
    }
  },
  methods: {
    confirm () {
      this.$emit('confirm-popup')
      this.closePopup()
    },
    closePopup () {
      this.$refs['my-modal'].hide()
    },
    afterHidePopup() {
      this.syncDataOfComponents.showPopup = false
    }
  }
}
</script>

<style scoped>

</style>
