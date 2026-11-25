import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CounterPage from './pages/CounterPage.jsx'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<CounterPage />} />
      </Routes>
    </BrowserRouter>
  )
}
