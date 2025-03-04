import React, { ComponentType } from 'react'
import Auth from '@/components/Auth'
import App from '@/views/App'
import { useDispatch } from 'react-redux'
import { getResumnAsync } from '@/store/features/app'
import { getSearchParams } from '@/utils'

const appLoader = async (e) => {
  const { params = {} } = e
  const search = getSearchParams()
  const dispatch = useDispatch<AppDispatch>()
  if (search.get('userId')) {
    dispatch(getResumnAsync({ id: search.get('userId') }))
  }
  return null
}

export default [
  {
    path: '/',
    element: <App />,
    loader: appLoader,
  },
  {
    path: '/:userId',
    element: <App />,
    loader: appLoader,
  },
]

export function importComponent(path: Promise<{ default: ComponentType<any> }>, auth?: boolean) {
  const LazeCom = React.lazy(() => path)
  if (auth) {
    return (
      <Auth>
        <LazeCom />
      </Auth>
    )
  } else {
    return <LazeCom />
  }
}
