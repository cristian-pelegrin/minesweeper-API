function get(req, res) {
  res.status(200).json({ id: req.params.id });
}

module.exports = {
  get,
};
