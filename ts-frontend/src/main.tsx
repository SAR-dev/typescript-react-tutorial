import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ReactInit } from './ReactInit'
import { Footer } from './Footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactInit />
    <Footer />
  </StrictMode>,
)
