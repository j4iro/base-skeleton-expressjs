const Example = require('../services/UserServiceExample')

const userServiceExample = new Example()

async function getData(req, res, next) {
  try {
    const id = req.params.id
    const result = await userServiceExample.getData(id)
    res.status(200).json({
      success: true,
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getData,
}
