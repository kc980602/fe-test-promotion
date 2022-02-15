import { FC } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const PromoDetail: FC = () => {
  const [searchParams] = useSearchParams()

  return (
    <div className='PromoDetail'>
      <h1>Promotion Details</h1>
      <p>This is a dummy page for promotion details.</p>
      <p>
        Your promotion is&nbsp;
        <strong>{searchParams.get('from') ?? 'unknown'}</strong>.
      </p>
      <p>
        Click <Link to='/'>here</Link> to go back to homepage.
      </p>
    </div>
  )
}

export default PromoDetail
