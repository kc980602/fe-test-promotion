import { FC } from 'react'
import { Link } from 'react-router-dom'

const NotFound: FC = () => {
  return (
    <div className='NotFound'>
      <p>404 Page not found</p>
      <p>
        Click <Link to='/'>here</Link> to go back to homepage.
      </p>
    </div>
  )
}

export default NotFound
