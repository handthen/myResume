import React, { ComponentType } from 'react'
import Auth from '@/components/Auth'
import App from '@/views/App'
import { useDispatch } from 'react-redux'
import { getResumnAsync } from '@/store/features/app'

const appLoader = async (e) => {
  const { params = {} } = e
  const dispatch = useDispatch<AppDispatch>()
  dispatch(getResumnAsync({ id: params.userId }))
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
