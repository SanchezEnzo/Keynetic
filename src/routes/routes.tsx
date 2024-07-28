import { Route, Routes } from 'react-router-dom'
import { LayoutApp } from '../pages/Layout'
import { Keyboard } from '../components/keyboard/Keyboard'
import { Search } from '../components/Input/Search'

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
