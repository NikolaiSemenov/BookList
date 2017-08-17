import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import ContactListPage from '@/pages/contacts/ContactListPage'
import ContactDetailPage from '@/pages/contacts/ContactDetailPage'
import ContactEditPage from '@/pages/contacts/ContactEditPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/contacts',
      name: 'ContactListPage',
      component: ContactListPage
    },
    {
      path: '/contacts/:contactId',
      name: 'ContactDetailPage',
      component: ContactDetailPage
    },
    {
      path: '/contacts/:contactId/edit',
      name: 'ContactEditPage',
      component: ContactEditPage
    }
  ]
})
