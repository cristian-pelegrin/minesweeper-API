function generateUniqueId() {
  return Number(Date.now().toString());
}

module.exports = {
  generateUniqueId,
};
