import Api from './Api'

export default {
  register (credentials) {
    let api = Api()
    return api.post('register', credentials)
  }
}

// AuthenticationService.register({
//   email: 'testing@gmail.com',
//   password: '123456'
// })
