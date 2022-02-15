import { FC } from 'react'

type AspectRatioBoxProps = {
  ratio: number
}

const AspectRatioBox: FC<AspectRatioBoxProps> = ({ children, ratio = 1 }) => {
  return (
    <div sx={{
      position: 'relative'
    }}>
      <div sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        '& > *': { height: '100%', width: '100%' }
      }}>{children}</div>
      <div style={{ paddingBottom: (1 / ratio) * 100 + '%' }} />
    </div>
  )
}

export default AspectRatioBox
