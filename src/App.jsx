import * as React from 'react';

import FlexContainer from './containers/FlexContainer'
import AppBar from './components/Navigations/AppBar'
import Drawer from './components/Navigations/Drawer'
import Router from './Router'

import './App.scss';

class App extends React.Component {
  state = {
    sideBarOpened: false
  }

  handleSideBarOpen = () => this.setState({ sideBarOpened: true })
  handleSideBarClose = () => this.setState({ sideBarOpened: false })

  render = () => (
    <FlexContainer>
      <AppBar
        onSideBarOpen={this.handleSideBarOpen}
      />
      <Drawer
        open={this.state.sideBarOpened}
        onClose={this.handleSideBarClose}
      />
      <Router />
    </FlexContainer>
  )
}

export default App;
