import gql from 'graphql-tag';
export const GET_CARS = gql`
  {
    cars {
      id
      brand
      models
    }
  }
`