import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import HomePage from './pages/HomePage'
import PricingPage from './pages/PricingPage'
import RoadmapPage from './pages/RoadmapPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
