import { ThemeUIStyleObject } from '@theme-ui/core'

export const lineClamp = (line: number): ThemeUIStyleObject => ({
  display: '-webkit-box',
  'WebkitBoxOrient': 'vertical',
  'WebkitLineClamp': line,
  overflow: 'hidden',
  wordBreak: 'break-all',
  textOverflow: 'ellipsis'
})
