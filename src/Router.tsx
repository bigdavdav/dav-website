import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/Default'

import { Home } from './pages/Home'
import { AboutMe } from './pages/About Me'
import { Projects } from './pages/Projects'

export function Router() {
  return(
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/projects' element={<Projects />} />
      </Route>
    </Routes>
  )
}