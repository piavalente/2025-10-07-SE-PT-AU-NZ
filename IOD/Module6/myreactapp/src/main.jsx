import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ErrorBoundary } from "react-error-boundary"
import ErrorMessage from './MyComponents/ErrorMessage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <ErrorBoundary FallbackComponent = {ErrorMessage}> {/*from the ErrrorMessage.jsx*/}
      <App /> {/* can wrap App or other high-level parent components */}
    </ErrorBoundary>
  </StrictMode>,
)
