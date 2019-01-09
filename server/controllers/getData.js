const data = {
  1: 'one',
  2: 'two',
  3: 'three',
};

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

module.exports = async (req, res) => {
  try {
    /** The emulating response delay */
    const getDataFromStorage = await wait(1000).then(() => data);

    res.status(200).send(getDataFromStorage);
  } catch (error) {
    console.error(error.toString());
  }
}
