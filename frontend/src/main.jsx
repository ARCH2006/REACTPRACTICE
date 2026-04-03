import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ButtonClickEvent from './ButtonClickEvent.jsx'
import InputChangingEvent from './InputChangingEvent.jsx'
import SubmitFormEvent from './SubmitFormEvent.jsx'
import DisplayEvent from './DisplayEvent.jsx'
import EventHandlingExample from './EventHandling.jsx'
import ConditionalRenderingExample from './ConditionalRenderingExample.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConditionalRenderingExample />
  </StrictMode>,
)
