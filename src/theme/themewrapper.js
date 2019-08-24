import React from 'react'
import { MuiThemeProvider } from '@material-ui/core';
import CssBaseLine from '@material-ui/core/CssBaseline'

import Navigation from '../components/navigation'

import theme from '../theme/muitheme'

export default function themewrapper({children}) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseLine/>
      <Navigation />
      {children}
    </MuiThemeProvider>
  )
}
