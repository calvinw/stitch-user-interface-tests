import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CounterPage from './pages/CounterPage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CounterPage />} />
        <Route path="/counter" element={<CounterPage />} />
      </Routes>
    </BrowserRouter>
  )
}
