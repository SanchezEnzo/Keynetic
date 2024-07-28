import { Route, Routes } from 'react-router-dom'
import { LayoutApp } from '../layout/pages/Layout'
import { Keyboard } from '../keyboard/components/Keyboard'
import { Search } from '../search/components/Search'

export const routes = (
  <Routes>
    <Route path='/' element={<LayoutApp />}>
      <Route index element={<Keyboard />} />
      <Route path='keyboard' element={<Keyboard />} />
      <Route path='search' element={<Search />} />
      <Route path='audio' />
    </Route>
  </Routes>
)
