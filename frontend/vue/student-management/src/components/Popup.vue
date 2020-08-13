<template>
  <div>
    <b-modal id="modal-1">
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
    show: false,
    afterConfirmPopup: {
      type: Function,
      required: true
    },
    afterClosePopup: {
      type: Function,
      required: true
    },
  },
  watch: {
    show: function (val) {
      if (val) {
        this.$bvModal.show('modal-1')
      } else {
        this.$bvModal.hide('modal-1')
      }
    }
  },
  methods: {
    confirm () {
      this.$emit('confirm-popup')
      this.afterConfirmPopup()
      this.closePopup()
    },
    closePopup () {
      this.$bvModal.hide('modal-1')
      this.afterClosePopup()
    }
  }
}
</script>

<style scoped>

</style>
