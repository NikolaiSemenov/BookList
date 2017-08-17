import exchange from '@/api/exchange'
import * as types from '../mutation-types'

// initial state
const state = {
  all: []
}

// getters

const getters = {
  allContacts: state => state.all
}

// actions

const actions = {
  getAllContacts ({ commit }) {
    exchange.getContacts(contacts => {
      commit(types.RECIEVE_CONTACTS, { contacts })
    })
  },

  updateContact ({ commit }, contact) {
    commit(types.UPDATE_CONTACT, { contact })
  }
}

// mutations

const mutations = {
  [types.RECIEVE_CONTACTS] (state, { contacts }) {
    state.all = contacts
  },

  [types.UPDATE_CONTACT] (state, { contact }) {
    state.all = state.all.map((item) => {
      if (item.id === contact.id) {
        return contact
      }
      return item
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
