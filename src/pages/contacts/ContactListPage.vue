<template lang="pug">
  div.contacts__wrap
    div.search
      v-card
        v-card-text
          v-text-field(
            name="input-1-3"
            label="Поиск"
            prepend-icon="search"
            single-line
            v-model="searchString"
          )
    v-layout(row wrap)    
      v-flex(xs-12)
        v-card
          v-list(two-line)
            v-list-tile(v-for="contact in filteredContacts" :key="contact.id" :to="'contacts/' + contact.id + '/edit'")
              v-list-tile-avatar
                img(:src="contact.avatar")
              v-list-tile-content
                v-list-tile-title(v-html="contact.name")
                v-list-tile-sub-title
                  span(class="grey--text text--darken-2") Company: 
                  | {{ contact.company.name }}
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        searchString: ''
      }
    },
    computed: {
      ...mapGetters([
        'allContacts'
      ]),
      filteredContacts () {
        let contactsArr = this.allContacts
        let searchString = this.searchString
        searchString = searchString.trim().toLowerCase()
        contactsArr = contactsArr.filter(contact => {
          if (contact.name.toLowerCase().indexOf(searchString) !== -1) {
            return contact
          }
        })
        return this.$lodash.sortBy(contactsArr, [function (o) { return o.name }])
      }
    }
  }
</script>

<style lang="stylus">
  .search
    margin-bottom: 30px
    max-width: 300px
    .card
      &__text
        padding: 0 10px
    .input-group
      padding: 18px 0 0 0    
</style>
