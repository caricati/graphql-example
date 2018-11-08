import React, { Component } from 'react'
import { ApolloProvider, Query } from 'react-apollo'
import ApolloClient from 'apollo-boost'

import './App.css'

import { GET_CARS } from './gql/cars'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          
          <Query query={GET_CARS}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>
            if (error) return <p>Error: { error } </p>
            console.log(data)
            return (
              <ul>
                {
                  data.cars.map(({brand, id, models}) =>
                  <li key={id}><b>{brand}:</b> {models.join(', ')}</li>)
                }
              </ul>
            )
          }}
          </Query>
        </div>
      </ApolloProvider>
    )
  }
}

export default App
