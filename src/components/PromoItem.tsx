import _ from 'lodash'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import AspectRatioBox from '~/components/AspectRatioBox'
import { ThemeColor } from '~/types/app.type'
import { Promotion } from '~/types/promotion.type'
import { lineClamp } from '~/utils/cssMixins'

type BoxImageProps = {
  url: string
}

const BoxImage: FC<BoxImageProps> = ({ url }) => (
  <AspectRatioBox ratio={1}>
    <img src={url} sx={{ objectFit: 'contain' }} />
  </AspectRatioBox>
)

type PromoItemProps = {
  promotion: Promotion
  color?: ThemeColor
}

const PromoItem: FC<PromoItemProps> = ({ promotion, color }) => {

  const imgCount = promotion.productImageUrls.length
  const grid = imgCount > 5 ? 3 : imgCount > 1 ? 2 : 1

  return (
    <a href={promotion.promoUrl} target="_blank">
      <div
        sx={{
          borderWidth: 2,
          borderStyle: 'solid',
          borderColor: `${color}.base`,
          borderRadius: 3
        }}
      >
        <div
          sx={{
            display: 'grid',
            gridGap: 2,
            gridTemplateColumns: `repeat(${grid}, 1fr)`,
            gridTemplateRow: `repeat(${grid}, 1fr)`,
            p: 2
          }}
        >
          {
            _.isEmpty(promotion.productImageUrls) ?
              <BoxImage
                url='https://dummyimage.com/500x500/333333/fff.jpg&text=Placeholder'
              /> :
              promotion.productImageUrls.map((url, idx) => (
                <BoxImage key={idx} url={url} />
              ))
          }
          {/**/}
        </div>
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 68,
            backgroundColor: `${color}.base`,
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            p: 1,
          }}
        >
        <span sx={lineClamp(2)}>
          {promotion.promoName}
        </span>
        </div>
      </div>
    </a>
  )
}

export default React.memo(PromoItem)
