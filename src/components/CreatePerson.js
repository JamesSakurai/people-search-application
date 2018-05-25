import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import  { gql } from 'apollo-boost'
import { PERSONS_QUERY } from './PersonsPage'

class CreatePerson extends Component {
  state = {
    name: '',
    address: '',
    age: '',
    interests: '',
    picture: '',
  }
  
  render() {
    return (
      <Mutation
        mutation={CREATE_PERSON_MUTATION}
        update={(cache, { data }) => {
          const { persons } = cache.readQuery({ query: PERSONS_QUERY })
          cache.writeQuery({
            query: PERSONS_QUERY,
            data: { persons: persons.concat([data.createPerson]) },
          })
        }}
      >
        {(createPerson, { data, loading, error }) => {
          return (
            <div className="pa4 flex justify-center bg-white">
              <form
                onSubmit={async e => {
                  e.preventDefault()
                  const { name, address, age, interests, picture } = this.state
                  await this.props.createPerson({
                    variables: { name, address, age, interests, picture },
                  })
                  this.props.history.replace('/persons')
                }}
              >
                <h1>Create Person</h1>
                <input
                  autoFocus
                  className="w-100 pa2 mv2 br2 b--black-20 bw1"
                  onChange={e => this.setState({ name: e.target.value })}
                  placeholder="Name"
                  type="text"
                  value={this.state.name}
                />
                <textarea
                  className="db w-100 ba bw1 b--black-20 pa2 br2 mb2"
                  cols={50}
                  onChange={e => this.setState({ address: e.target.value })}
                  placeholder="Address"
                  rows={8}
                  value={this.state.address}
                />
                <input
                  autoFocus
                  className="w-100 pa2 mv2 br2 b--black-20 bw1"
                  onChange={e => this.setState({ age: e.target.value })}
                  placeholder="Age"
                  type="number"
                  value={this.state.age}
                />
                <textarea
                  className="db w-100 ba bw1 b--black-20 pa2 br2 mb2"
                  cols={50}
                  onChange={e => this.setState({ interests: e.target.value })}
                  placeholder="Interests"
                  rows={8}
                  value={this.state.interests}
                />
                <input
                  autoFocus
                  className="w-100 pa2 mv2 br2 b--black-20 bw1"
                  onChange={e => this.setState({ picture: e.target.value })}
                  placeholder="Picture"
                  type="text"
                  value={this.state.picture}
                />
                <input
                  className={`pa3 bg-black-10 bn ${this.state.text &&
                  this.state.title &&
                  'dim pointer'}`}
                  disabled={!this.state.text || !this.state.title}
                  type="submit"
                  value="Create"
                />
                <a className="f6 pointer" onClick={this.props.history.goBack}>
                  or cancel
                </a>
              </form>
            </div>
          )
        }}
      </Mutation>
    )
  }
  
}

const CREATE_PERSON_MUTATION = gql`
    mutation CreatePersonMutation($name: String!, $address: String!, $age: Int!, $interests: String!, $picture: String!) {
        createPerson(name: $name, address: $address, age: $age, interests: $interests, picture: $picture) {
            id
            name
            address
            age
            interests
            picture
        }
    }
`

export default withRouter(CreatePerson)
