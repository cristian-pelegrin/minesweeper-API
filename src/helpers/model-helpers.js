function generateUniqueId() {
  return Date.now().toString();
}

module.exports = {
  generateUniqueId,
};
