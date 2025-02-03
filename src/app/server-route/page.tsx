import React from 'react'
import { serverSideFunction } from '../utils/server-utils'
import { useTheme } from '@/components/themeProvider'

function ServerRoutePage() {
  const result = serverSideFunction()
  console.log('result', result)
  // const theme = useTheme()
  // console.log('Theme===', theme)
  return (
    <div>ServerRoutePage {result}</div>
  )
}

export default ServerRoutePage