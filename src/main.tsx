import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { enableMSW } from './api/mocks'
import { App } from './app'

enableMSW().then(() => {
  // se for mode teste, liga os mockes - Mocker service worker
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
