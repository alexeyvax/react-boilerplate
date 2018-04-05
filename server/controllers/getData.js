const data = {
  1: 'one',
  2: 'two',
  3: 'three',
};

module.exports.getData = async (req, res) => {
  try {
    res.status(200).send(data);
  } catch (error) {
    console.error(error.toString());
  }
}
