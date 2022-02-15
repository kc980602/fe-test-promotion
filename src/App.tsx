import { ThemeProvider } from '@theme-ui/core'
import React, { FC } from 'react'
import { useRoutes } from 'react-router'
import routes from '~/routes'
import { theme } from '~/theme'
import './App.css'

const App: FC = () => {
  const content = useRoutes(routes)

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        {content}
      </ThemeProvider>
    </div>
  )
}

export default App
