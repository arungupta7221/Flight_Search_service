const { CityService } = require('../services/index')

const cityService = new CityService()

// for create need POST method and data from req.body
const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body)
    return res.status(201).json({
      data: city,
      success: true,
      message: 'successfully created a city',
      err: {},
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      data: {},
      success: false,
      message: 'not able to created a city',
      err: error,
    })
  }
}

// for DELETE need DELETE method and body params id -> /city/:id
const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id)
    return res.status(200).json({
      data: response,
      success: true,
      message: 'successfully delete a city',
      err: {},
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      data: {},
      success: false,
      message: 'not able to delete a city',
      err: error,
    })
  }
}

const get = async (req, res) => {
  try {
    const response = await cityService.getCity(req.params.id)
    return res.status(200).json({
      data: response,
      success: true,
      message: 'successfully fetched a city',
      err: {},
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      data: {},
      success: false,
      message: 'not able to fetched a city',
      err: error,
    })
  }
}
// Patch -> /city/:id -> req.body
const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body)
    return res.status(200).json({
      data: response,
      success: true,
      message: 'Successfully updated a city',
      err: {},
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to update the city',
      err: error,
    })
  }
}

module.exports = {
  create,
  destroy,
  get,
  update,
}
