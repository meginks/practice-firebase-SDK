const db = require('./dbConfig');

module.exports = {
  add,
  find,
  findById,
  update,
  removeUser
}

async function add(user) {
  const [id] = await db('Users')
    .insert(user)
  return findById(id)
}

function find() {
  return db('Users')
}

function findById(id) {
  return db('Users')
    .where({
      'id': id
    })
    .first();
}

function update(id, changes) {
  return db('Users')
  .where('id', id)
  .update(changes);
}

async function removeUser(id) {
  return db('Users')
  .where({id})
  .del();
}