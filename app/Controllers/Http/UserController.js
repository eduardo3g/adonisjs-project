'use strict'

const User = use('App/Models/User');

class UserController {
  async store ({ request }) {
    const data = request.only(['username', 'email', 'password'])

    const user = await User.creatte(data);

    return user
  }
}

module.exports = UserController
