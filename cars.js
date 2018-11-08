const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/demo-graphql', { useNewUrlParser: true })

const carsSchema = new mongoose.Schema({
  brand: String,
  models: [String],
})

const Car = mongoose.model('Car', carsSchema)


const query = () => Car.find({})
const findOne = ({ id }) => Car.findById(id)
const create = (car) => Car.create(car)

module.exports = { query, findOne }