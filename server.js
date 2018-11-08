const express = require('express')
const cors = require('cors')
const expressGraphql = require('express-graphql')
const bodyParser = require('body-parser')
const { buildSchema } = require('graphql')

const { query: cars, findOne: car } = require('./cars')

const schema = buildSchema(`
  type Query {
    car(id: String!): Car
    cars(brand: String): [Car]
  },
  type Car {
    id: String
    brand: String
    models: [String]
  }
`)

const rootValue = { car, cars }

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/graphql', expressGraphql({
  schema, 
  rootValue,
  graphiql: true,
}))

app.post('/api/cars/add')

app.listen(4000, () =>
  console.log('Express GraphQL Server Now Running On localhost:4000/graphql'))
