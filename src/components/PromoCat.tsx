import _ from 'lodash'
import React, { FC, useEffect, useState } from 'react'
import PromoItem from '~/components/PromoItem'
import { getPromotions } from '~/slices/promotionSlice'
import { useDispatch, useSelector } from '~/store'
import { ThemeColor } from '~/types/app.type'
import { Category } from '~/types/promotion.type'

type PromoCatProps = {
  categories: Category[],
  color?: ThemeColor
}

const PromoCat: FC<PromoCatProps> = ({ categories, color = 'orange' }) => {
  const [selected, setSelected] = useState<number>()

  const dispatch = useDispatch()

  const { promotions } = useSelector(state => state.promotion)

  useEffect(() => {
    if (categories && !_.isEmpty(categories)) {
      setSelected(categories[0].id)
    }
  }, [categories])

  useEffect(() => {
    // Dispatching the thunk returns a promise
    const promise = !_.isNil(selected) && dispatch(getPromotions(selected))
    return () => {
      // `createAsyncThunk` attaches an `abort()` method to the promise
      promise && promise?.abort()
    }
  }, [selected])

  return (
    <div className='PromoCat'>
      <div
        sx={{
          display: 'flex',
          alignItems: 'baseline'
        }}
      >
        {
          categories.map(item => (
            <button
              key={item.id}
              onClick={() => setSelected(item.id)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 200,
                height: 60,
                fontSize: 24,
                p: 1,
                backgroundColor: 'white',
                color: `${color}.base`,
                transition: 'background-color .1s ease-in-out',
                ...(selected === item.id ? {
                  cursor: 'default',
                  height: 64,
                  borderTopWidth: 4,
                  borderTopStyle: 'solid',
                  borderTopColor: `${color}.accent`,
                  backgroundColor: `${color}.base`,
                  color: 'white',
                  boxShadow: '2px 0 4px #a5a5a5',
                  zIndex: 2
                } : {})
              }}
            >
              <span>{item.name}</span>
            </button>
          ))
        }


      </div>
      <div
        sx={{
          position: 'relative',
          zIndex: 2,
          borderWidth: 10,
          borderStyle: 'solid',
          borderColor: `${color}.base`,
          backgroundColor: 'white',
          p: [24, null, 32]
        }}
      >
        <div
          sx={{
            display: ['flex', null, 'grid'],
            gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
            alignItems: 'center',
            gap: 16,
            overflow: 'auto'
          }}
        >
          {
            promotions.map(item => (
              <div
                key={item.promoUrl}
                sx={{ width: [210, null, 'auto'], flexShrink: 0 }}
              >
                <PromoItem color={color} promotion={item} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default React.memo(PromoCat)
