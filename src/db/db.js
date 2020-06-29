const repository = {
  games: [],
};

function load(collectionName, id = null) {
  if (!id) return repository.games;

  return repository[collectionName].find((obj) => obj.id === id);
}

function save(collectionName, obj) {
  const id = Date.now().toString();
  repository[collectionName].push({ id, ...obj });

  return load(collectionName, id);
}

function remove(collectionName, id) {
  const obj = load(id);
  if (obj === undefined) return false;
  repository[collectionName].splice(repository.games.findIndex((i) => i.id === id));

  return true;
}

module.exports = {
  load,
  save,
  remove,
};
