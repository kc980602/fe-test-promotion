import { FC, useEffect, useState } from 'react'
import Container from '~/components/Container'
import PromoCat from '~/components/PromoCat'
import { ThemeColorOption } from '~/constants/app'
import { getCategories } from '~/slices/promotionSlice'
import { useDispatch, useSelector } from '~/store'
import { ThemeColor } from '~/types/app.type'

const Home: FC = () => {
  const dispatch = useDispatch()

  const { categories } = useSelector(state => state.promotion)

  const [themeColor, setThemeColor] = useState<ThemeColor>('orange')

  useEffect(() => {
    dispatch(getCategories())
  }, [])

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

      <div sx={{ backgroundColor: `${themeColor}.light`, height: '100vh', py: 40 }}>
        <Container>
          <div sx={{mb: 4}}>
            <span sx={{mr: 2}}>Theme Color:</span>
            {
              ThemeColorOption.map(color => (
                <button
                  sx={{ backgroundColor: `${color}.base`, color: 'white' }}
                  onClick={() => setThemeColor(color)}
                >{color}</button>
              ))
            }
          </div>

          <PromoCat categories={categories} color={themeColor} />
        </Container>
      </div>
    </div>
  )
}

export default Home
