const { CityRepository } = require('../repository/index')

class CityService {
  constructor() {
    this.cityRepository = new CityRepository()
  }

  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data)
      return city
    } catch (error) {
      throw { error }
      console.log('something went wrong in service layer')
    }
  }

  async deleteCity(cityId) {
    try {
      const response = await this.cityRepository.deleteCity(cityId)
      return response
    } catch (error) {
      throw { error }
      console.log('something went wrong in service layer')
    }
  }
  async getCity(cityId) {
    try {
      const city = await this.cityRepository.getCity(cityId)
      return city
    } catch (error) {
      throw { error }
      console.log('something went wrong in service layer')
    }
  }
  async updateCity(cityId, data) {
    try {
      const city = await this.cityRepository.updateCity(cityId, data)
      return city
    } catch (error) {
      throw { error }
      console.log('something went wrong in service layer')
    }
  }

  async getAllCities(filter) {
    try {
      const cities = await this.cityRepository.getAllCities({ name: filter.name })
      return cities
    } catch (error) {
      throw { error }
      console.log('something went wrong in service layer')
    }
  }
}

module.exports = CityService
