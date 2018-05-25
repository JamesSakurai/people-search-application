import React, { Component, Fragment } from 'react'
import Post from '../components/Post'
import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'

export default class PersonsPage extends Component {
  render() {
    return (
      <Query query={PERSONS_QUERY}>
        {({ data, loading, error, refetch }) => {
          if (loading) {
            return (
              <div className="flex w-100 h-100 items-center justify-center pt7">
                <div>Loading ...</div>
              </div>
            )
          }
          
          if (error) {
            return (
              <div className="flex w-100 h-100 items-center justify-center pt7">
                <div>An unexpected error occured.</div>
              </div>
            )
          }
          
          return (
            <Fragment>
              <h1>Persons</h1>
              {data.person &&
              data.person.map(post =>
                post.text = post.description
                (<Post
                  key={post.id}
                  post={post}
                  refresh={() => refetch()}
                />
              ))}
              {this.props.children}
            </Fragment>
          )
        }}
      </Query>
    )
  }
}

export const PERSONS_QUERY = gql`
    query PersonQuery {
        persons {
            id
            name
            address
            age
            interests
            picture
        }
    }
`
