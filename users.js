function UserList() {
  this.users = [];
}

UserList.prototype.append = function(username, callback) {
  this.users.push(username);

  // Usuario que entrou e a nova lista de usuarios
  callback(username, this.getUsers());
};

UserList.prototype.disconnect = function(username, callback) {

  // Encontra o usuario na lista
  var idx = this.users.indexOf(username);

  if(idx > -1) {

    // Remove o usuario da lista
    this.users.splice(idx, 1);
  }

  // Usuario que saiu e a nova lista de usuarios
  callback(username, this.getUsers());
};

UserList.prototype.getUsers = function() {
  return this.users;
};

module.exports = UserList;
