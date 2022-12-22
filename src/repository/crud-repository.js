class CrudRepository {
  constructor(model) {
    this.model = model
  }
  async create(data) {
    try {
      const result = await this.model.create(data)
      return result
    } catch (error) {
      console.log('something went wrong in repository')
      throw { error }
    }
  }
  async get(modelId) {
    try {
      const result = await this.model.findByPk(modelId)
      return result
    } catch (error) {
      console.log('something went wrong in repository')
      throw { error }
    }
  }
  async destroy(modelId) {
    try {
      await this.model.destroy({
        where: {
          id: modelId,
        },
      })
    } catch (error) {
      console.log('something went wrong in repository')
      throw { error }
    }
  }
  async getAll() {
    try {
      const results = await this.model.findAll()
      return results
    } catch (error) {
      console.log('something went wrong in repository')
      throw { error }
    }
  }
  async update(cityId, data) {
    try {
      const result = await this.model.findByPk(cityId)
      result.name = data.name
      await result.save()
      return result
    } catch (error) {
      console.log('something went wrong in repository')
      throw { error }
    }
  }
}

module.exports = CrudRepository
