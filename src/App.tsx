import React, { FC } from 'react'
import { useRoutes } from 'react-router'
import routes from '~/routes'

const App: FC = () => {
  const content = useRoutes(routes)

  return (
    <div className='App'>
      {content}
    </div>
  )
}

export default App
