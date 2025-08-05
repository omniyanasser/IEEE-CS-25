
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import ApiComponent from './ApiComponent.tsx'
import ThemeSwitcher from './ThemeSwitcher';
import ComposingAtoms from './ComposingAtoms.tsx';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <ApiComponent />
    <ThemeSwitcher />
    <ComposingAtoms/>
  </StrictMode>,
)
