import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/bricolage-grotesque'
import '@fontsource/ibm-plex-sans/400.css'
import '@fontsource/ibm-plex-sans/500.css'
import '@fontsource/ibm-plex-sans/600.css'
import App from './App.jsx'

// El idioma lo decide el <html lang="..."> de cada página: index.html (en) o es/index.html (es).
const lang = document.documentElement.lang.startsWith('es') ? 'es' : 'en'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App lang={lang} />
  </StrictMode>,
)
