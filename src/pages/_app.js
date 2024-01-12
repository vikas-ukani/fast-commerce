import '@/styles/globals.css'

import DefaultLayout from '@/components/layouts/DefaultLayout'
import { Provider } from 'react-redux'
import { persistor, store } from '@/store'
import { PersistGate } from 'redux-persist/integration/react'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </PersistGate>
    </Provider>
  )
}
