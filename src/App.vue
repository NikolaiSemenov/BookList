<template lang="pug">
  v-app
    v-toolbar(dark class="cyan")
      v-toolbar-title
        v-icon mdi-watch
        router-link(to="/" tag="span" style="cursor: pointer") ContactBook
      v-spacer
      v-toolbar-items
          v-btn(flat to="/contacts" tag="a") Contacts
    main.page-body
      v-container(fluid)
        router-view
    v-footer(class="cyan")
      span(class="white--text") © 2017
</template>

<script>
  // import { mapGetters, mapActions } from 'vuex'
  export default {
    data () {
      return {
      }
    },
    created () {
      this.$store.dispatch('getAllContacts')
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
  .toolbar
    &__content
      max-width: 1024px
      margin: 0 auto
</style>
