<template lang="pug">
  v-card
    div.contact-detail
      div.contact-detail__half
        v-card-media(:src="contact.avatar" height="300px")
      div.contact-detail__half
        ul.contact-detail__list
          li.contact-detail__item
            v-icon phone
            strong Company: 
            | {{ contact.company.name }}
          li.contact-detail__item
            v-icon phone
            strong Phone: 
            | {{ contact.phone }}
          li.contact-detail__item
            v-icon email
            strong Email: 
            | {{ contact.email }}
          li.contact-detail__item
            v-icon email
            strong Website: 
            | {{ contact.website }}
          li.contact-detail__item
            v-icon email
            strong Address: 
            | {{ contact.address.zipcode }}, {{ contact.address.country }}, {{ contact.address.state }}, {{ contact.address.city }}         
               
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'allContacts'
    ]),
    contact () {
      let contactId = parseInt(this.$route.params.contactId)
      return this.allContacts.filter(p => parseInt(p.id) === contactId)[0] || {}
    }
  }
}
</script>

<style lang="stylus">
</style>
