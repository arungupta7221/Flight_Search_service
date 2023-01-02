const { FlightRepository, AirplaneRepository } = require('../repository/index')
const { compareTime } = require('../utils/helper')
class FlightService {
  constructor() {
    this.airplaneRespository = new AirplaneRepository()
    this.flightrespository = new FlightRepository()
  }
  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw { error: 'Arrival time cannot be less than departure time' }
      }
      const airplane = await this.airplaneRespository.getAirplane(data.airplaneId)
      const flight = await this.flightrespository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      })
      return flight
    } catch (error) {
      throw { error }
      console.log('something went wrong in service layer')
    }
  }
  async getFlight(flightId) {
    try {
      const flight = await this.flightrespository.getFlight(flightId)
      return flight
    } catch (error) {
      throw { error }
      console.log('something went wrong in service layer')
    }
  }
  async getAllFlightsData(data) {
    try {
      const flights = await this.flightrespository.getAllFlights(data)
      return flights
    } catch (error) {
      throw { error }
      console.log('something went wrong in service layer')
    }
  }

  async updateFlight(flightId, data) {
    try {
      const response = await this.flightrespository.updateFlight(flightId, data)
      return response
    } catch (error) {
      throw { error }
      console.log('something went wrong in service layer')
    }
  }
}
module.exports = FlightService

/**
 * {
 *   flightNumber,
 *  airplaneId ,
 *   departureAirportId,
 *   arrivalAirportId,
 *   arrivalTime,
 *   departureTime,
 *   price
 *   totalSeats -> airplane
 * }
 */
