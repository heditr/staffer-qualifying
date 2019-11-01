import React from 'react'
import { NavigationProvider, Link, Route } from './Navigation.js'
import PageLayout from "./components/pageLayout/pageLayout";
import Container from "./components/container/container";

export default class App extends React.Component {
  render() {
    return (
        <PageLayout>
            <Container></Container>
        </PageLayout>
    )
  }
}

export class AppLayout extends React.PureComponent {
  render() {
    return (
        <div>
          <nav>
            <Link href="/" activeStyle={{color: 'red'}}>
              Home
            </Link>
            <Link href="/browse/" activeStyle={{color: 'red'}}>
              Browse
            </Link>
          </nav>
          <main>
            {this.props.children}
          </main>
        </div>
    )
  }
}
