<template lang="pug">
  v-card
    div.contact-edit
      div.contact-edit__half
        v-card-media(:src="contact.avatar" height="300px")
      div.contact-edit__half
        ul.contact-edit__list
          li.contact-edit__item
            v-text-field(name="input-1" prepend-icon="phone" v-model="contact.company.name")
          li.contact-edit__item
            v-text-field(name="input-2" prepend-icon="phone" v-model="contact.phone")
          li.contact-edit__item
            v-text-field(name="input-3" prepend-icon="email" v-model="contact.email")
          li.contact-edit__item
            v-text-field(name="input-4" prepend-icon="email" v-model="contact.website")
          li.contact-edit__item
            v-text-field(name="input-5" prepend-icon="email" v-model="contact.address.country")
          li.contact-edit__item 
            v-text-field(name="input-6" prepend-icon="email" v-model="contact.address.city")
      div.text-xs-center
        v-btn(round primary dark als-right @click.prevent="update(contact)") Сохранить
      div.text-xs-center
        v-btn(round primary dark als-right @click.prevent="goToContactList") Отмена  
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'edit-contact',
  computed: {
    ...mapGetters([
      'allContacts'
    ]),
    contact () {
      let contactId = parseInt(this.$route.params.contactId)
      return this.allContacts.filter(p => parseInt(p.id) === contactId)[0] || {}
    }
  },
  methods: {
    update (contact) {
      this.$store.dispatch('updateContact', contact)
      this.$router.push({ name: 'ContactListPage' })
    },
    goToContactList () {
      this.$router.push({ name: 'ContactListPage' })
    }
  }
}
</script>

<style lang="stylus">
  .contact-detail
    display: flex
    &__half
      margin:10px
      width: calc(50% - 20px)
    &__list
      margin: 0
      padding: 0
      list-style-type: none
    &__item
      padding: 10px
      border-bottom: 1px solid #ccc
      display: flex
      //align-items: center
      .input-group
        padding: 0

</style>

