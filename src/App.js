import React, { Component, Fragment } from 'react'
import { ThemeProvider } from 'styled-components' 
import ThemeSwitcher from './components/ThemeSwitcher'

import * as themes from './styles/themes'
import ThemeContext from './styles/themes/context'
import { GlobalStyle } from './GlobalStyle'

import Routes from './routes/'

class App extends Component {
  state = {
    theme: themes.dark
  }

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === themes.dark ? themes.light : themes.dark
    })
  }

  render() {
    return (
      <Fragment>
        <ThemeContext.Provider value={this.state}>
          {/* <ThemeSwitcher toggleTheme={this.toggleTheme} /> */}
          <ThemeContext.Consumer>
            {theme => (
              <ThemeProvider theme={theme}>
                <Fragment>
                  <GlobalStyle/>   
                  <Routes/>
                </Fragment>
              </ThemeProvider>
            )}
          </ThemeContext.Consumer>
        </ThemeContext.Provider>
      </Fragment>
    )
  }
}
export default App