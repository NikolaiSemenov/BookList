import { HTTP } from '../main'

export default {
  getContacts (fn) {
    HTTP.get('users')
      .then(res => {
        if (res) {
          fn(res.data)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}
