class UserServiceExample {
  // constructor()

  getData(id) {
    const data = {
      id: id,
      username: 'Jairo',
      email: 'user@express.js',
      avatar: 'https://avatar.io/avatar.png',
    }
    return data
  }
}

module.exports = UserServiceExample
