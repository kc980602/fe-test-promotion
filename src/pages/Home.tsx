import { FC } from 'react'
import PromoCat from '~/components/PromoCat'

const Home: FC = () => {
  return (
    <div className='Home'>
      <h1>Hello Offers!</h1>
      <p>
        <strong>Title: Promotion Categories</strong>
      </p>
      <p>
        {/*Edit <code>PromoCat.tsx</code> to see the result.*/}
      </p>
      <p>
        You <strong>MUST</strong> use the data placed under{' '}
        <code>public/data</code>.
      </p>
      <p>
        Feel free to add more libraries and components if you want. However,
        component libraries like React-Bootstrap are <strong>NOT</strong>{' '}
        allowed.
      </p>
      <hr />
      <PromoCat />
    </div>
  )
}

export default Home
