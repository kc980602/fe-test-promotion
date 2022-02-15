import { FC } from 'react'

const Container: FC = ({ children }) => {
  return (
    <div sx={{ maxWidth: [null, null, 992 - 32, 1200 - 32], mx: 'auto', px: [16] }}>
      {children}
    </div>

  )
}

export default Container
