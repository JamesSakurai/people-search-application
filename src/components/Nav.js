import React, { Component, Fragment } from 'react'
import {
  NavLink,
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import FeedPage from './FeedPage'
import DraftsPage from './DraftsPage'
import CreatePage from './CreatePage'
import DetailPage from './DetailPage'

import PersonsPage from './PersonsPage'
import CreatePerson from './CreatePerson'


export default class extends Component {
  render() {
    return(
      <Router>
        <Fragment>
          <nav className="pa3 pa4-ns">
            <Link
              className="link dim black b f6 f5-ns dib mr3"
              to="/"
              title="Feed"
            >
              Blog
            </Link>
            <NavLink
              className="link dim f6 f5-ns dib mr3 black"
              activeClassName="gray"
              exact={true}
              to="/"
              title="Feed"
            >
              Feed
            </NavLink>
            <NavLink
              className="link dim f6 f5-ns dib mr3 black"
              activeClassName="gray"
              exact={true}
              to="/persons"
              title="Persons"
            >
              Persons
            </NavLink>
            <NavLink
              className="link dim f6 f5-ns dib mr3 black"
              activeClassName="gray"
              exact={true}
              to="/drafts"
              title="Drafts"
            >
              Drafts
            </NavLink>
        
            <Link
              to="/createperson"
              className="f6 link dim br1 ba ph3 pv2 fr mb2 dib black"
            >
              + Create Person
            </Link>
            <Link
              to="/create"
              className="f6 link dim br1 ba ph3 pv2 fr mb2 dib black"
            >
              + Create Draft
            </Link>
          </nav>
          <div className="fl w-100 pl4 pr4">
            <Switch>
              <Route exact path="/" component={FeedPage} />
              <Route path="/drafts" component={DraftsPage} />
              <Route path="/create" component={CreatePage} />
              <Route path="/post/:id" component={DetailPage} />
              
              <Route path="/persons" component={PersonsPage} />
              <Route path="/createPerson" component={CreatePerson}  />
        
            </Switch>
          </div>
        </Fragment>
      </Router>
    )
  }
}