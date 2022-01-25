class UserClient {
  login(id, password) {
    return fetch('http://djdkcs;/login/iid+password') //
      .then(response => response.json());
  }
}

module.exports = UserClient;
