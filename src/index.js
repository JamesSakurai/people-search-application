import React from 'react'
import ReactDOM from 'react-dom'

import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

import Nav from './components/Nav'




import 'tachyons'
import './index.css'

const client = new ApolloClient({ uri: 'http://localhost:4000' })

ReactDOM.render(
  <ApolloProvider client={client}>
    <Nav/>
  </ApolloProvider>,
  document.getElementById('root'),
)
