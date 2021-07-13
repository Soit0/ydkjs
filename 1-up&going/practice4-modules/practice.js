function User() {
    var username, password

    function doLogin(user, pw) {
        username = user
        password = pw
    }

    var publicAPI = {
        login: doLogin
    }

    return publicAPI
}

var fred = User()

console.log(fred.username)

fred.login('fred', 'test')

console.log(fred.username);

console.log(fred.publicAPI)


// still very confusing tbh (13/07/2021)