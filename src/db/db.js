const repository = {
  games: [],
};

function load(collectionName, id = null) {
  if (!id) return repository.games;

  return repository[collectionName].find((obj) => obj.id === id);
}

function save(collectionName, obj) {
  repository[collectionName].push(obj);

  return load(collectionName, obj.getId());
}

function remove(collectionName, id) {
  const obj = load(id);
  if (obj === undefined) return false;
  repository[collectionName].splice(repository.games.findIndex((i) => i.id === id));

  return true;
}

function update(collectionName, obj) {
  remove(collectionName, obj.getId());

  return save(collectionName, obj);
}

module.exports = {
  load,
  save,
  remove,
  update,
};
